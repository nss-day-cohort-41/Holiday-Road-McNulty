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

getParkData().then(
    () => {
        parkList();
    }
)

getStateData().then(
    () => {
        stateList();
    }
)