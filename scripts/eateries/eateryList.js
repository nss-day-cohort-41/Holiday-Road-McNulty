
//function to show eateries in dropdown

const eateryList = () => {
    for (const eateryObject of eateryCollection) {
    const eateryHTML = eateryConverter(eateryObject);
    const eaterySelectElement = document.querySelector(".eateryChoice");
    eaterySelectElement.innerHTML += eateryHTML;
  }
}
   const eatsList = (eateryObject) =>  {
    const eateryHTML = eateryPreviewConverter(eateryObject);
    const eaterySelectElement = document.querySelector(".previewEaterySelection");
    eaterySelectElement.innerHTML += eateryHTML;
    console.log(eateryObject)
  }

 
 const clearEateryDropdown = () => {
  const eateryTarget = document.querySelector(".previewEaterySelection");
  eateryTarget.innerHTML = "";

}
const eateryTarget = document.querySelector(".previewEaterySelection");

let userEateryChoice = "";

const eateryDropdown = document.querySelector(".eateryChoice");
    eateryDropdown.addEventListener("change", clickEvent => {
    userEateryChoice = clickEvent.target.value;
 //   if (userEateryChoice !== undefined) {
   clearEateryDropdown(); 
   for (let eateryObject of eateryCollection) { 
     if (userEateryChoice === eateryObject.businessName){
       eatsList(eateryObject)
     } }
      
       
        console.log("Selected Value:", userEateryChoice)
        // const stateHTML = userChoice;
     
    })




