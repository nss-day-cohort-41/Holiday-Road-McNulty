let weatherForcastData = [];
const weatherForecastProvider = () => {
    // something is wrong on line 4 
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=37216,us&units=imperial&appid=${keys.weatherKey}`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ).then((arrayOfWeatherForecasting) => {
            weatherForecastData = arrayOfWeatherForecasting;
    })
}