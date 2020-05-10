const chalk = require("chalk");

exports.error = (err) => {
  console.log(chalk.red(err));
};

exports.success = (msg) => {
  console.log(chalk.bold.greenBright(msg));
};
