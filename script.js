function getWeather(response) {
	let temperatureTodayIcon = document.querySelector("#temperature-today-icon");
	let temperatureTodayValue = document.querySelector(
		"#temperature-today-value"
	);
	let cityElement = document.querySelector("#city-name");
	let todaysWeatherHeading = document.querySelector("#todays-weather-heading");
	let nextSixDaysHeading = document.querySelector("#next-six-days-heading");
	let liveTempTodayValue = Math.round(response.data.daily[0].temperature.day);
	let liveTodayIconUrl = response.data.daily[0].condition.icon_url;
	let cityName = response.data.city;
	cityElement.innerHTML = cityName;
	todaysWeatherHeading.innerHTML = `Today's weather forecast for ${cityName}`;
	nextSixDaysHeading.innerHTML = `Weather forecast for the next six days in ${cityName}`;
	temperatureTodayValue.innerHTML = `${liveTempTodayValue}°C`;
	temperatureTodayIcon.innerHTML = `<img src="${liveTodayIconUrl}" alt="">`;
}

function searchCity(city) {
	let apiKey = "t892ofdde3d43fb03b089a7dffb097a9";
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(getWeather);
}

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-input");

	searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Norwich");
