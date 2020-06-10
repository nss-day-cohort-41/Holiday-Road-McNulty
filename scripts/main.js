getBizarreData().then(
    () => {
        bizarreList();
    }
)

weatherForecastProvider().then(
    () => {
        weatherList();
    }
)