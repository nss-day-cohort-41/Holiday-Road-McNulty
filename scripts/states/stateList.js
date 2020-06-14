//function to show state in dropdown
const stateList = () => {
  for (const currentStateObject of stateCollection) {
  const stateHTML = stateConverter(currentStateObject);
  const stateSelectElement = document.querySelector(".stateChoice");
  stateSelectElement.innerHTML += stateHTML;
  }
}

const clearParksDropdown = () => {
const contentTarget = document.querySelector(".parkChoice");
contentTarget.innerHTML = "";
}

let userStateChoice = "";
//Click event that takes user's state selection and stores the state abbreviation in userChoice then calls the getParkData function to displays the list of parks associated with that state

const stateDropdown = document.querySelector(".stateChoice");
stateDropdown.addEventListener("change", clickEvent => {
userStateChoice = clickEvent.target.value;
for (const stateObject of stateCollection) {
  if (userStateChoice === stateObject.abbreviation) {
    
    console.log("Selected Value:", userStateChoice)
    //invoking getParkData function to fetch the park data based on user's state choice 
    clearParksDropdown();
    getParkData(userStateChoice)
    
}
  }  

})