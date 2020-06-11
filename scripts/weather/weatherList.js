const weatherList = () => {
    
    for (const currentWeatherObject of weatherForecastData.list) {
        const weatherHTML = weatherForecastConverter(currentWeatherObject);
        const weatherArticleElement = document.querySelector(".weatherForecast");
        console.log("test2", weatherArticleElement)
        // weatherArticleElement.innerHTML += weatherHTML
    }
}