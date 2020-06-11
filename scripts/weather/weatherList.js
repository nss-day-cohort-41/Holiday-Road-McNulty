//function that displays the weather information in the browser
const weatherList = (weatherForecastData) => {
    
    for (const currentWeatherObject of weatherForecastData.list) {
        const weatherHTML = weatherForecastConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherForecast");
        weatherArticleElement.innerHTML += weatherHTML
    }
}


