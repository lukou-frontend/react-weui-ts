const { getProjectPath } = require('./utils/projectHelper'); // eslint-disable-line import/order
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tsConfig = require('./utils/getTSCommonConfig')();
const gulp = require('gulp');
const rimraf = require('rimraf');
const tsDefaultReporter = ts.reporter.defaultReporter();
const getBabelCommonConfig = require('./utils/getBabelCommonConfig');
const through2 = require('through2');
const stripCode = require('gulp-strip-code');
const merge2 = require('merge2');

const libDir = getProjectPath('build/lib');
const esDir = getProjectPath('build/es');
const distDir = getProjectPath('build/dist');

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  delete babelConfig.cacheDirectory;

  let stream = js.pipe(babel(babelConfig))
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compile(modules) {
  rimraf.sync(modules !== false ? libDir : esDir);
  const assets = gulp
    .src(['src/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir));
  let error = 0;
  const source = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'typings/**/*.d.ts',
  ];
  // allow jsx file in components/xxx/
  if (tsConfig.allowJs) {
    source.unshift('src/**/*.jsx');
  }
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
  const tsFilesStream = babelify(tsResult.js, modules);
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
  return merge2([tsFilesStream, tsd, assets]);
}

const tsFiles = ['src/**/*.ts', 'src/**/*.tsx', 'typings/**/*.d.ts'];

function compileTs(stream) {
  return stream
    .pipe(ts(tsConfig))
    .js.pipe(
      through2.obj(function (file, encoding, next) {
        // console.log(file.path, file.base);
        file.path = file.path.replace(/\.[jt]sx$/, '.js');
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest(process.cwd()));
}
gulp.task('tsc', () =>
  compileTs(
    gulp.src(tsFiles, {
      base: cwd,
    })
  )
);

gulp.task('compile-with-es', done => {
  console.log('[Parallel] Compile to es...');
  compile(false).on('finish', done);
});

gulp.task(
  'default',
  gulp.series(gulp.parallel('compile-with-es'))
);