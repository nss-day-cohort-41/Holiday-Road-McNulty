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
    return stateCollection
}

//Click event that takes user's state selection and stores the state abbreviation in userChoice then calls the getParkData function to displays the list of parks associated with that state
const stateDropdown = document.querySelector(".stateChoice");
    stateDropdown.addEventListener("change", clickEvent => {
    userChoice = clickEvent.target.value;
       console.log("Selected Value:", userChoice)
       getParkData(userChoice)
    }
)