import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSuccess = (msg) => {
	console.log(`${chalk.bgGreen('Success')} ${msg}`);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan('HELP')} 
		Без параметров - вывод погоды
		-s [CITY] - установка города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
	);
};

export { printError, printSuccess, printHelp };