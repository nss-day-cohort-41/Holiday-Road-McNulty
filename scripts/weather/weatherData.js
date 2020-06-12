let weatherForecastData = [];

//function to clear the weather data before new park selected
const contentTarget = document.querySelector(".weatherContainer");
const clearWeatherForecast = () => {
    contentTarget.innerHTML = "";
  }

//function that fetches weather data passing in the latitude and longitude of the user chosen park
const weatherForecastProvider = (lat, long) => {
        
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
    exclude=current,minutely,hourly&units=imperial&cnt=5&appid=${keys.weatherKey}`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ).then((arrayOfWeatherForecasting) => {
            weatherForecastData = arrayOfWeatherForecasting;
            clearWeatherForecast();
            //invoking weatherList function passing in the individual weather information of the specified park chosen in order to display it to the browser
            weatherList(weatherForecastData);           
            
    })
}



