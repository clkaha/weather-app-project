function getWeather(response) {
	let temperatureTodayIcon = document.querySelector("#temperature-today-icon");
	let temperatureTodayMax = document.querySelector("#temperature-today-max");
	let temperatureTodayMin = document.querySelector("#temperature-today-min");
	let cityElement = document.querySelector("#city-name");
	let todaysWeatherHeading = document.querySelector("#todays-weather-heading");
	let descriptionToday = document.querySelector("#description-today");
	let humidityToday = document.querySelector("#humidity-value");
	let nextSixDaysHeading = document.querySelector("#next-six-days-heading");
	let windspeedToday = document.querySelector("#windspeed");
	let liveDescription = response.data.daily[0].condition.description;
	let liveHumidityValue = response.data.daily[0].temperature.humidity;
	let liveWindspeed = response.data.daily[0].wind.speed;
	let liveTodayIconUrl = response.data.daily[0].condition.icon_url;
	let liveTempTodayMax = Math.round(response.data.daily[0].temperature.maximum);
	let liveTempTodayMin = Math.round(response.data.daily[0].temperature.minimum);
	let cityName = response.data.city;
	cityElement.innerHTML = cityName;
	todaysWeatherHeading.innerHTML = formatTodayDate(new Date());
	descriptionToday.innerHTML = `${liveDescription}`;
	humidityToday.innerHTML = `${liveHumidityValue}%`;
	windspeedToday.innerHTML = `${liveWindspeed}km/h`;
	temperatureTodayIcon.innerHTML = `<img src="${liveTodayIconUrl}" alt="">`;
	temperatureTodayMax.innerHTML = `${liveTempTodayMax}°C`;
	temperatureTodayMin.innerHTML = `${liveTempTodayMin}°C`;
	nextSixDaysHeading.innerHTML = `Weather forecast for the next six days in ${cityName}`;
}

let now = new Date();
function formatTodayDate() {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[now.getDay()];
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let date = now.getDate();
	let month = months[now.getMonth()];
	return `${day} ${date} ${month}`;
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
