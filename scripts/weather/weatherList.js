const weatherList = () => {
    
    for (const currentWeatherObject of weatherForecastData.list) {
        const weatherHTML = weatherForecastConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherForecast");
        weatherArticleElement.innerHTML += weatherHTML
    }
}