const saveItineraryButton = document.querySelector(".submitButton")

//responsible for creating save button functionality
const saveYourItinerary = () => {
    //upon clicking save button
    saveItineraryButton.addEventListener("click", clickEvent => {
    // will check to see if one of each selection has been made. If so, save will happen.
    // need to change these variables once Trigg gets them assigned
     if (parkPreview === true && eateryPreview === true && bizarrePreview === true)
    //save itinerary
      {

      }
    // if missing any of the selections, alert will prompt to let user know
     else (alert("Please select an option from each menu"))
      }
    )
}

// this is where I want the data to go
// "http://localhost:8088/itineraries"