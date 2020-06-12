//function to show park in dropdown
const parkList = () => {
    for (const currentParkObject of parkCollection.data) {
    const parkHTML = parkConverter(currentParkObject);
    const parkSelectElement = document.querySelector(".parkChoice");
    parkSelectElement.innerHTML += parkHTML;
  }
}

// --- weather ---
let userParkChoice = "";
let weatherObject = {};
//function to target park dropdown, add event listener for user click
const parkDropdown = document.querySelector(".parkChoice");
  parkDropdown.addEventListener("change", clickEvent => {
    //this variable will register the value of the user's selection
     userParkChoice = clickEvent.target.value
     //iterate through the user's chosen state data
     for (const parkObject of parkCollection.data) {
       //if the user's park choice is equal to the name of the park (ie value of the option chosen)
       if (userParkChoice === parkObject.name) {
         //the empty weatherObject will then have the value of the parkObject(which contains individual park data chosen by user)
          weatherObject = parkObject
       }
     }    //invoking the function that fetches the weather data and passing in the latitude and longitude of the park(which comes from the weatherObject) 
          weatherForecastProvider(weatherObject.latitude, weatherObject.longitude)
            }
          )
// -----



// function to display park details into details box
const parkDetailsList = () => {
  //iterating through each individual park in the park collection array
  for (const currentParkDetailsObject of parkCollection.data ) {
  //invoking the HTML converter for the park details
  const parkDetailsHTML = parkDetailsConverter(currentParkDetailsObject);
  // targeting the details box 
  const parkArticleElement = document.querySelector(".selectionDetails");
  //changing content of details box to the HTML string interpolation (display it in browser)
  parkArticleElement.innerHTMl += parkDetailsHTML;
  }
}

// clear details List
const detailListClear = document.querySelector(".selectionDetails")
const clearDetailsList = () => detailListClear.innerHTML = "";

let previewObject = {};  
//make detail box hidden at first???
document.querySelector(".selectionDetails").classList.toggle("hidden");
//target the park preview button
const previewButtonToggle = document.querySelector(".previewParkSelection");
// add Event Listener for click of button
previewButtonToggle.addEventListener("click", clickEvent => {
  document.querySelector(".selectionDetails").classList.toggle("hidden");
  for (parkObject of parkCollection.data) {
    if (userParkChoice === parkObject.name) {
      previewObject = parkObject;
      //call function to display HTML details on browser
   alert("Feature coming soon");
    }

  }
  
<<<<<<< HEAD
})

=======
//   for (const parkObj of parkCollection.data) {
//     const parkPreviewHTML = parkPreviewConverter(parkObj)
//   const parkDropdown = document.querySelector(".parkChoice");
//   parkDropdown.addEventListener("change", clickEvent => {
//     const choice = clickEvent.target.value;
//     if (choice === parkObj.name) {
//     const contentTarget = document.querySelector(".previewSelection")
//     contentTarget.innerHTML += parkPreviewHTML;
//   }
//   })
// }
>>>>>>> master
