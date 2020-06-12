//function to show bizarraries in dropdown
const bizarreList = () => {
    for (const currentBizarreObject of bizarreCollection) {
    const bizarreHTML = bizarreConverter(currentBizarreObject);
    const bizarreSelectElement = document.querySelector(".bizarreChoice");
    bizarreSelectElement.innerHTML += bizarreHTML;
  }
}
/* // Creating a second value to pass the object through
const bizList = (bizarreObject) =>  {
  const bizarreHTML = bizarrePreviewConverter(bizarreObject);
  const bizarreSelectElement = document.querySelector(".previewBizarreSelection");
  bizarreSelectElement.innerHTML += bizarreHTML;
  console.log(bizarreObject)
}
// Drop down Clearing
const clearBizarreDropdown = () => {
  const bizarreTarget = document.querySelector(".previewBizarreSelection");
   bizarreTarget.innerHTML = "";
}




const bizarreTarget = document.querySelector(".previewBizarreSelection");

// Creates the user choice, upon click event and stores it
let userBizarreChoice = "";

const bizarreDropdown = document.querySelector(".bizarreChoice");
    bizarreDropdown.addEventListener("change", clickEvent => {
    userBizarreChoice = clickEvent.target.value;

   clearBizarreDropdown(); 
   for (let bizarreObject of bizarreCollection) { 
     if (userBizarreChoice === bizarreObject.name){
       bizList(bizarreObject)
     }}
        console.log("Selected Value:", userBizarreChoice)
        // const stateHTML = userChoice;
     })

 */

/* 
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


 */