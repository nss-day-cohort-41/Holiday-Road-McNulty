let weatherForecastData = [];
const weatherForecastProvider = () => {
    return fetch("https://api.openweathermap.org/data/2.5/forecast?q=37216,us&units=imperial&appid=1f6ff824785b42bf208a5173b245ee80").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ).then((arrayOfWeatherForecasting) => {
        console.log("john's test", arrayOfWeatherForecasting);
            weatherForecastData = arrayOfWeatherForecasting;
    })
}