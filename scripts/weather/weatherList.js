//function that displays the weather information in the browser
const weatherList = () => {
    
    for (const currentWeatherObject of weatherForecastData.daily) {
        const weatherHTML = weatherForecastConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherForecast");
        weatherArticleElement.innerHTML += weatherHTML
    }
}




