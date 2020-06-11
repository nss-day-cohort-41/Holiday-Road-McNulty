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

const parkDropdown = document.querySelector(".parkChoice");
  parkDropdown.addEventListener("change", clickEvent => {
     userParkChoice = clickEvent.target.value
     for (element of parkCollection.data) {
       if (userParkChoice === element.name) {
        weatherObject = element 
       }
     }
          weatherForecastProvider(weatherObject.latitude, weatherObject.longitude)
            }
          )