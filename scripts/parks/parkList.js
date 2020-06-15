//function TO SHOW PARKS IN DROPDOWN
const parkList = () => {
  for (const currentParkObject of parkCollection.data) {
  const parkHTML = parkConverter(currentParkObject);
  const parkSelectElement = document.querySelector(".parkChoice");
  parkSelectElement.innerHTML += parkHTML;
  }
}

// --- function to get weather data for specified park to show based on user's park choice ---
let userParkChoice = "";
let weatherObject = {};
//function to target park dropdown, add event listener for user click
const parkDropdown = document.querySelector(".parkChoice");
parkDropdown.addEventListener("change", clickEvent => {
  //this variable will register the value of the user's selection for park
   userParkChoice = clickEvent.target.value
   //iterate through the user's chosen park data
   for (const parkObject of parkCollection.data) {
     //if the user's park choice is equal to the name of the park (ie value of the option chosen)
     if (userParkChoice === parkObject.name) {
       //if userParkChoice equals the parkObject id... invoke the function that gets the forecast data at the specified lat and long of that park
        getWeatherForecast(parkObject.latitude, parkObject.longitude)
     }
   }
})
// -----



// function to DISPLAY PARK IN PREVIEW BOX
const parkPreviewList = (parkPreviewObject) => {
//do not need to iterate through parkCollection because only displaying one park in preview, not all parks!
//invoking the HTML converter for the park preview box
const parkPreviewHTML = parkPreviewConverter(parkPreviewObject);
// targeting the park preview box 
const parkArticleElement = document.querySelector(".previewParkSelection");
//changing content of preview box to the HTML string interpolation (display it in browser)
parkArticleElement.innerHTML += parkPreviewHTML;
  }


// CLEAR park PREVIEW box
const parkPreviewClear = document.querySelector(".previewParkSelection")
const clearParkPreview = () => parkPreviewClear.innerHTML = "";

//target the park selection dropdown TO LISTEN FOR USER CHOICE AND POPULATING PARK PREVIEW BOX 
const populateParksPreview = document.querySelector(".parkChoice");
populateParksPreview.addEventListener("change", clickEvent => {
  for (const parkObject of parkCollection.data) {
    if (userParkChoice === parkObject.name) {
      clearParkPreview();
      //invoking function to display individual park chosen by passing in the individual park object
      parkPreviewList(parkObject);
      console.log(parkObject);
    }
  } 
})


// CLEAR park DETAILS box
const detailsClear = document.querySelector(".selectionDetails")
const clearDetails = () => detailsClear.innerHTML = "";

// function to DISPLAY PARK DETAILS IN DETAILS BOX
const parkDetailsList = (parkDetailsObject) => {
  //do not need to iterate through parkCollection because only displaying one park in preview, not all parks!
  //invoking the HTML converter for the park details box
  const parkDetailsHTML = parkDetailsConverter(parkDetailsObject);
  // targeting the details box 
  const parkArticleElement = document.querySelector(".selectionDetails");
  //changing content of details box to the HTML string interpolation (display it in browser)
  parkArticleElement.innerHTML += parkDetailsHTML;
    }

const showDetails = () => {
  document.querySelector(".selectionDetails").style.display = "block";
}

// functions to DISPLAY PARK DETAILS IN DETAILS BOX
// target the PARK PREVIEW BOX and make hidden
// document.querySelector(".selectionDetails").classList.toggle("hidden");
const previewButtonToggle = document.querySelector(".previewParkSelection");
// add Event Listener for click of button on preview park selection box
previewButtonToggle.addEventListener("click", clickEvent => {
document.querySelector(".selectionDetails").classList.toggle("hidden");
  for (const parkObject of parkCollection.data) {
    if (userParkChoice === parkObject.name) {
      clearParkDetails();
      showDetails();
      parkDetailsList(parkObject);
      console.log(parkObject);
    }
  } 

})

    




