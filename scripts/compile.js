const rimraf = require('rimraf');
const compileHelper = require('./utils/compileHelper')
const exec = require( 'child_process' ).exec;

const {createTask, runTasks, CLI} = compileHelper

let tasks = []

function createNodeBuild(){
  return (res, rej)=>{
      let count = 0;
      let bat = exec("npm run gulp", { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
        if (error) {
          console.error(error)
          rej(error);
          return;
        }
      });
      bat.stdout.on('data', (data) => {
        CLI.write(count++, data);
      });
      bat.on('exit', (code) => {
        res(code);
      });
  };
}

rimraf('build', ()=>{
  tasks.push(
    createTask('Making Babel Modules', createNodeBuild()),
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