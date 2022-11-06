import https from 'https';
import { getKeyValue, TOKEN_DICT } from './storage.service.js';

const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICT.token);
	if (!token) {
		throw new Error('Не задан ключ API, задайте его через -t [API_KEY]');
	}

	//const url = `api.openweathermap.org/data/2.5/weather?q=${city}& appid=${API} `;
	const url = new URL('https://api.openweathermap.org/data/2.5/weather');
	url.searchParams.append('q', city);
	url.searchParams.append('appid', token);
	url.searchParams.append('lang', 'ru');
	url.searchParams.append('units', 'metric');
	https.get(url, response => {
		let res = '';
		response.on('data', chunk => {
			res += chunk;
		});

		response.on('end', () => {
			console.log(res);
		});
	});
};

export { getWeather };