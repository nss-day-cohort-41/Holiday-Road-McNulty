const weatherForecastConverter = (weatherForecastObject) => {
    const weatherForecastHTMLRepresentation = `
    <ul class="weatherForecastDisplay">
        <li>Date: ${weatherForecastObject.dt}</li>
        <li>High: ${weatherForecastObject.temp.max} F</li>
        <li>Low: ${weatherForecastObject.temp.min} F</li>
        <li>${weatherForecastObject.weather[0].description}</li>
        <li>humidity: ${weatherForecastObject.humidity}%</li>
    </ul>`


return weatherForecastHTMLRepresentation;
}