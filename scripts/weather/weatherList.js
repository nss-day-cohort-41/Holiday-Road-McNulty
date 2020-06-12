//function that displays the weather information in the browser
const weatherList = (weatherForecastData) => {
    
    for (const currentWeatherObject of weatherForecastData.daily) {
        const weatherHTML = weatherForecastConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherContainer");
        weatherArticleElement.innerHTML += weatherHTML
    }
}



