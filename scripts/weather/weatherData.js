let weatherForecastData = [];

const contentTarget = document.querySelector(".weatherForecast");
const clearWeatherForecast = () => {
    contentTarget.innerHTML = " ";
  }

const weatherForecastProvider = (lat, long) => {
    
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=1f6ff824785b42bf208a5173b245ee80`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ).then((arrayOfWeatherForecasting) => {
            weatherForecastData = arrayOfWeatherForecasting;
            clearWeatherForecast();
            weatherList(weatherForecastData)
    })
}


