const weatherForecastConverter = (weatherForecastObject) => {
    const weatherForecastHTMLRepresentation = `
    <ul class="weatherForecastDisplay">
        <li>date: ${weatherForecastObject.dt_txt}</li>
        <li>Low: ${weatherForecastObject.main.temp_min} F</li>
        <li> high: ${weatherForecastObject.main.temp_max} F</li>
        <li>${weatherForecastObject.weather[0].description}</li>
        <li>humidity: ${weatherForecastObject.main.humidity}%</li>
    </ul>`
// lines 7 and 8 are up for debate

return weatherForecastHTMLRepresentation;
}