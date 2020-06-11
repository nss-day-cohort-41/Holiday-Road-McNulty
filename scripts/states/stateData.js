let stateCollection = []
let userChoice = "";

const getStateData = () => {
    return fetch("http://localhost:8088/states").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfStates) => {
                stateCollection = arrayOfStates
                
                console.log(stateCollection)
            }
        )
    
}



