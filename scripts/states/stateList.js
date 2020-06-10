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


//Click event that takes user's state selection and stores the state abbreviation in userChoice then calls the getParkData function to displays the list of parks associated with that state
const stateDropdown = document.querySelector(".stateChoice");
    stateDropdown.addEventListener("change", clickEvent => {
    userChoice = clickEvent.target.value;
    if (userChoice !== undefined) {
        clearParksDropdown();
        console.log("Selected Value:", userChoice)
         getParkData(userChoice);
      }
      
    }
)

