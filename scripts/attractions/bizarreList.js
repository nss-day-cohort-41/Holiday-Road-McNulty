//function to show bizarraries in dropdown
const bizarreList = (userChoice) => {
    for (const currentBizarreObject of bizarreCollection) {
    const bizarreHTML = bizarreConverter(currentBizarreObject);
    const bizarreSelectElement = document.querySelector(".bizarreChoice");
    bizarreSelectElement.innerHTML += bizarreHTML;
  }
}






const clearBizarreDropdown = () => {
  const contentTarget = document.querySelector(".previewBizarreSelection");
  contentTarget.innerHTML = "";
}

// Starts the Process of moving selection too preview box

let userBizarreChoice = "";

const bizarreDropdown = document.querySelector(".bizarreChoice");
    bizarreDropdown.addEventListener("change", clickEvent => {
    userBizarreChoice = clickEvent.target.value;
 //   if (userEateryChoice !== undefined) {
       clearBizarreDropdown(); 
       
        console.log("Selected Value:", userBizarreChoice)
        // const stateHTML = userChoice;
       // getEateryData(userEateryChoice);
        const bizarrePreviewElement = document.querySelector(".previewBizarreSelection");
        bizarrePreviewElement.innerHTML += userBizarreChoice;
        
      
      
    }
)
// const bizarreDropdown = document.querySelector(".bizarreChoice");
//     bizarreDropdown.addEventListener("change", clickEvent => {
//     const userChoice = clickEvent.target.value;


