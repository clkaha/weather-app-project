function getWeather(response) {
	let temperatureTodayIcon = document.querySelector("#temperature-today-icon");
	let temperatureTodayValue = document.querySelector(
		"#temperature-today-value",
	);
	let cityElement = document.querySelector("#city-name");
	let todaysWeatherHeading = document.querySelector("#todays-weather-heading");
	let nextSixDaysHeading = document.querySelector("#next-six-days-heading");
	// let day2Heading = document.querySelector("#day2");
	// let day3Heading = document.querySelector("#day3");
	// let day4Heading = document.querySelector("#day4");
	// let day5Heading = document.querySelector("#day5");
	// let day6Heading = document.querySelector("#day6");
	// let day7Heading = document.querySelector("#day7");
	let liveTempTodayValue = Math.round(response.data.daily[0].temperature.day);
	let liveTodayIconUrl = response.data.daily[0].condition.icon_url;
	let cityName = response.data.city;
	cityElement.innerHTML = cityName;
	todaysWeatherHeading.innerHTML = formatDate(new Date());
	temperatureTodayValue.innerHTML = `${liveTempTodayValue}°C`;
	temperatureTodayIcon.innerHTML = `<img src="${liveTodayIconUrl}" alt="">`;
	nextSixDaysHeading.innerHTML = `Weather forecast for the next six days in ${cityName}`;
	// day2Heading.innerHTML = `${days[1]}`;
	// day3Heading.innerHTML = `${days[2]}`;
	// day4Heading.innerHTML = `${days[3]}`;
	// day5Heading.innerHTML = `${days[4]}`;
	// day6Heading.innerHTML = `${days[5]}`;
	// day7Heading.innerHTML = `${days[6]}`;
}

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
function formatDate() {
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
