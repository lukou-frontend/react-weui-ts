const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));

const showWrite = argv.progress;
const showSection = argv.step || true;

const CLI = {
  section: msg => showSection ? console.log(chalk.white(chalk.underline.bgBlue(msg))) : false,
  write: (indicator, msg) => showWrite ? process.stdout.write(`(${chalk.red(indicator)})` + msg) : false
};
exports.CLI = CLI
exports.runTasks = function($tasks){
  let index = 0;

  return new Promise( (res, rej) => {

      function next() {
          if (index < $tasks.length) {
              $tasks[index]().then(next, rej);
              index++;
          } else {
              res();
          }
      }

      next();
  });
}
exports.createTask = function(msg, fn){
    return () => {
        CLI.section(msg);
        return new Promise((res, rej) => fn(res, rej));
    };
}
