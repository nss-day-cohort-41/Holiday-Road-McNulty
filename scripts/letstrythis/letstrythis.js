const stateDropdown = document.querySelector(".stateChoice");
    stateDropdown.addEventListener("change", clickEvent => {
    userChoice = clickEvent.target.value;
    if (userChoice !== undefined) {
        clearParksDropdown();
        console.log("Selected Value:", userChoice)
        // const stateHTML = userChoice;
        const eaterySelectElement = document.querySelector(".previewParkSelection");
        eaterySelectElement.innerHTML += userChoice;
         getParkData(userChoice);
      }
      
    }
)