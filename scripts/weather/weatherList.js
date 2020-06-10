const weatherList = () => {
    
    for (const currentWeatherObject of weatherForecastData.list) {
        const weatherHTML = weatherConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherForecast");
        weatherArticleElement.innerHTML += weatherHTML
    }
}