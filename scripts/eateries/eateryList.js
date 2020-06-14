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

 clearEateryDropdown(); 
 for (let eateryObject of eateryCollection) { 
   if (userEateryChoice === eateryObject.businessName){
     eatsList(eateryObject)
   } }
    
      console.log("Selected Value:", userEateryChoice)
     
  })
// function to allow eatery HTML to be displayed to correct area on webpage
const eateryDetailList = (eateryDetailObject) =>  {
  const eateryDetailHTML = eateryDetailConverter(eateryDetailObject);
  const eaterySelectElement = document.querySelector(".selectionDetails");
  eaterySelectElement.innerHTML += eateryDetailHTML;

}
  

  // function to make EATERY DETAILS appear
  const eateryDetails = document.querySelector(".previewEaterySelection");
    eateryDetails.addEventListener("click", clickEvent => {
      for (const eateryObject of eateryCollection) {
        if (userEateryChoice === eateryObject.businessName) {
          clearDetails();
          //invoking showDetails function from parkList page to show the details box
          showDetails();
          eateryDetailList(eateryObject);
        }
      }


    })
      
          
        
    
