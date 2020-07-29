const rimraf = require('rimraf');
const compileHelper = require('./utils/compileHelper')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDocConfig = require('../webpack.config.doc');
const {createTask, runTasks, CLI} = compileHelper

let tasks = []

function createWebpackBuild(config){
  return (res, rej) => {
      webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
          console.error(err)
          rej('webpack build error');
        }
        console.log(stats.toString({
          chunks: false,  // Makes the build much quieter
          colors: true    // Shows colors in the console
        }));
        res();
      });
  };
}

rimraf('build/demo', ()=>{

  tasks.push(
    createTask('Making Demo Build', createWebpackBuild(webpackConfig) ),
    createTask('Making Docs Build', createWebpackBuild(webpackDocConfig) )
  );

  // run tasks
  runTasks(tasks).then( () => {
        // all done here
        CLI.section('FINISH BUILD');
  }, err => {
        // rejection happened
        console.log('Error', err);
  });

});