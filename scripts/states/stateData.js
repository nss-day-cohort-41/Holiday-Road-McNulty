let stateCollection = [];


const getStateData = () => {
    return fetch("http://localhost:8088/states").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfStates) => {
                stateCollection = arrayOfStates
                stateList()
                console.log(stateCollection)
            }
        )
    
}

