const moment = require('moment');
const chalk = require('chalk');

moment().format();
const now = moment();

console.log(chalk.white.bgBlack("It is ") + chalk.blue.bgBlack("Tuesday, July 18th 2017, 3:07:48 pm") + chalk.white.bgBlack(".   "));
console.log(chalk.white.bgBlack("It is the ") + chalk.magenta.bgBlack("199th") + chalk.white.bgBlack(" day of the year.             "));
console.log(chalk.white.bgBlack("It is ") + chalk.cyan.bgBlack("54468") + chalk.white.bgBlack(" seconds into the day.            "));
console.log(chalk.white.bgBlack("It ") + chalk.green.bgBlack("is") + chalk.white.bgBlack(" during Daylight Savings Time.          "));
console.log(chalk.white.bgBlack("It ") + chalk.red.bgBlack("is not") + chalk.white.bgBlack(" not a leap year.                   "));