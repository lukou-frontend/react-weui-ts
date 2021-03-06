const { getProjectPath } = require('./utils/projectHelper'); // eslint-disable-line import/order
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tsConfig = require('./utils/getTSCommonConfig')();
const transformLess = require('./utils/transformLess');

const gulp = require('gulp');
const rimraf = require('rimraf');
const tsDefaultReporter = ts.reporter.defaultReporter();
const getBabelCommonConfig = require('./utils/getBabelCommonConfig');
const through2 = require('through2');
const stripCode = require('gulp-strip-code');
const merge2 = require('merge2');
const concat = require('gulp-concat');

const libDir = getProjectPath('build/lib');
const esDir = getProjectPath('build/es');
const distDir = getProjectPath('build/dist');
const docgenDir = getProjectPath('build/docgen');

const cwd = process.cwd()

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  delete babelConfig.cacheDirectory;

  let stream = js.pipe(babel(babelConfig))
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function copyLess(dir) {
  // 拷贝less
  const less = gulp
    .src(['src/components/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        this.push(file.clone());
        next();
      })
    )
    .pipe(gulp.dest(dir));
  return less
}

function compile(modules) {
  rimraf.sync(modules !== false ? libDir : esDir);
  const less = copyLess(modules === false ? `${esDir}/components` : `${libDir}/components`)
  const assets = gulp
    .src(['src/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir));
  let error = 0;
  const source = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'typings/**/*.d.ts',
  ];
  if (tsConfig.allowJs) {
    source.unshift('src/**/*.jsx');
  }
  // 编译ts文件
  const tsResult = gulp.src(source).pipe(
    ts(tsConfig, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    })
  );

  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1);
    }
  }

  tsResult.on('finish', check);
  tsResult.on('end', check);
  // babel编译
  const tsFilesStream = babelify(tsResult.js, modules);
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
  return merge2([less, tsFilesStream, tsd, assets]);
}

function compileLess() {
  rimraf.sync(distDir);
  return gulp
    .src(['src/components/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        transformLess(file.path)
            .then(css => {
              file.contents = Buffer.from(css);
              file.path = file.path.replace(/\.less$/, '.css');
              this.push(file);
              next();
            })
            .catch(e => {
              console.error(e);
            });
      })
    )
    .pipe(concat('react-weui.css'))
    .pipe(gulp.dest(distDir));
}

const tsFiles = ['src/**/*.ts', 'src/**/*.tsx', 'typings/**/*.d.ts'];

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...');
  compile(false).on('finish', done);
});
gulp.task('compile:less', done => {
  console.log('Compile less...');
  compileLess().on('finish', done);
});

function compileTs(stream) {
  return stream
    .pipe(ts(tsConfig))
    .js.pipe(
      through2.obj(function (file, encoding, next) {
        // console.log(file.path, file.base);
        file.path = file.path.replace(/\.[jt]sx$/, '.js').replace(/src\//, '');
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest(docgenDir));
}

gulp.task('compile-docgen', (done) => {
  copyLess(docgenDir)
  compileTs(
    gulp.src(tsFiles, {
      base: cwd,
    })
  )
  done()
})

gulp.task(
  'default',
  gulp.series('compile:less', gulp.parallel('compile-with-es', 'compile-docgen'))
);