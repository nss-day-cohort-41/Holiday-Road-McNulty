let weatherForecastData = [];

//function to clear the weather data before new park selected
const contentTarget = document.querySelector(".weatherForecast");
const clearWeatherForecast = () => {
    contentTarget.innerHTML = "";
  }

//function that fetches weather data passing in the latitude and longitude of the user chosen park
const weatherForecastProvider = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=1f6ff824785b42bf208a5173b245ee80`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ).then((arrayOfWeatherForecasting) => {
        console.log("john's test", arrayOfWeatherForecasting);
            weatherForecastData = arrayOfWeatherForecasting;
            clearWeatherForecast();
            //invoking weatherList function passing in the individual weather array information of the specified park chosen in order to display it to the browser
            weatherList(weatherForecastData)
    })
}


