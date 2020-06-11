//function to show park in dropdown
const parkList = () => {
    for (const currentParkObject of parkCollection.data) {
    const parkHTML = parkConverter(currentParkObject);
    const parkSelectElement = document.querySelector(".parkChoice");
    parkSelectElement.innerHTML += parkHTML;
  }
}



let userParkChoice = "";
let weatherObject = {};
//function to target park dropdown, add event listener for user click
const parkDropdown = document.querySelector(".parkChoice");
  parkDropdown.addEventListener("change", clickEvent => {
    //this variable will register the value of the user's selection
     userParkChoice = clickEvent.target.value
     //iterate through the user's chosen state data
     for (parkObject of parkCollection.data) {
       //if the user's park choice is equal to the name of the park (ie value of the option chosen)
       if (userParkChoice === parkObject.name) {
         //the empty weatherObject will then have the value of the parkObject(which contains individual park data chosen by user)
          weatherObject = parkObject
       }
     }    //invoking the function that fetches the weather data and passing in the latitude and longitude of the park(which comes from the weatherObject) 
          weatherForecastProvider(weatherObject.latitude, weatherObject.longitude)
            }
          )