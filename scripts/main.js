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

getEateryData().then(
    () => {
        eateryList();
    }
)

getStateData().then(
    () => {
        stateList();
    }
)

getParkData().then(
    () => {
        parkList();
    }
)
