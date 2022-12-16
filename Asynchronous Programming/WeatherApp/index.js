
const searchCity = async () => {
	const city = document.getElementById('city-input').value;
	const data = await getWeatherData(city);
	showWeatherData(data, city)
}

const getWeatherData = (city) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd7b97c5c93msh06f196b9c92ead7p145db8jsnfde4d5fee539',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));

}


const showWeatherData = (weatherData, city) => {
	console.log(weatherData);
	document.getElementById('city-name').innerText = city;
	document.getElementById('temp').innerText = weatherData.temp;
	document.getElementById('min-temp').innerText = weatherData.min_temp;
	document.getElementById('max-temp').innerText = weatherData.max_temp;
}