
//function to show eateries in dropdown

const eateryList = () => {
    for (const eateryObject of eateryCollection) {
    const eateryHTML = eateryConverter(eateryObject);
    const eaterySelectElement = document.querySelector(".eateryChoice");
    eaterySelectElement.innerHTML += eateryHTML;
  }
}
  /* {
    for (const eateryObject of eateryCollection)  */
   const eatsList = (eateryObject) =>  {
    const eateryHTML = eateryPreviewConverter(eateryObject);
    const eaterySelectElement = document.querySelector(".previewEaterySelection");
    eaterySelectElement.innerHTML += eateryHTML;
    console.log(eateryObject)
  }

 
 const clearEateryDropdown = () => {
  const contentTarget = document.querySelector(".previewEaterySelection");
  contentTarget.innerHTML = "";

}
const contentTarget = document.querySelector(".previewEaterySelection");

let userEateryChoice = "";

const eateryDropdown = document.querySelector(".eateryChoice");
    eateryDropdown.addEventListener("change", clickEvent => {
    userEateryChoice = clickEvent.target.value;
 //   if (userEateryChoice !== undefined) {
   clearEateryDropdown(); 
   for (let eateryObject of eateryCollection) { 
     if (userEateryChoice === eateryObject.businessName){
       eatsList(eateryObject)
     }

    
  }
      
       
        console.log("Selected Value:", userEateryChoice)
        // const stateHTML = userChoice;
     
    }
)
/* const eateryPreviewList = () => {
  for (const eateryObject of eateryCollection) {
    const eateryDetailHTML = eateryPreviewConverter(eateryObject);
    const eateryElement = document.querySelector(".previewEaterySelection");
    eateryElement.innerHTMl += eateryDetailHTML;
  }
} */






/* 


const eateryDropdown = document.querySelector(".eateryChoice");
eateryDropdown.addEventListener("change", clickEvent => {
    userEateryChoice = clickEvent.target.value;
      //  console.log("Selected Value:", userChoice)
      //getEateryData(userEateryChoice)
       //for (eateryObject of eateryCollection){
        for (const currentEateryObject of eateryCollection) {
          if (userEateryChoice === currentEateryObject.businessName)
          const eateryPreviewHTML = eateryPreviewConverter(currentEateryObject);
          const eateryPreviewElement = document.querySelector(".previewEaterySelection");
          eateryPreviewElement.innerHTML += eateryPreviewHTML;

      // if (userEateryChoice===eateryObject.name)

        */

    
 

//Click event that takes user's state selection and stores the state abbreviation in userChoice then calls the getParkData function to displays the list of parks associated with that state


/* const previewEateryList = () => {
  for (const currentEateryObject of eateryCollection) {
    const eateryPreviewHTML = eateryPreviewConverter(currentEateryObject);
    const eateryPreviewElement = document.querySelector(".previewEaterySelection");
    eateryPreviewElement.innerHTML += eateryPreviewHTML;
}
 */



