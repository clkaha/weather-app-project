function getWeather(response) {
	let temperatureTodayIcon = document.querySelector("#temperature-today-icon");
	let temperatureTodayValue = document.querySelector(
		"#temperature-today-value"
	);
	let liveTempTodayValue = Math.round(response.data.daily[0].temperature.day);
	let liveTodayIconUrl = response.data.daily[0].condition.icon_url;
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
	let cityElement = document.querySelector("#city-name");
	cityElement.innerHTML = searchInput.value;
	searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
