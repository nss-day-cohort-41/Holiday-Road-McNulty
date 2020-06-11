
 
//  Controls the conversion and user input being pushed to preview boxes
 /* const eateryDropdown = document.querySelector(".eateryChoice");
 eateryDropdown.addEventListener("change", (clickEvent) => {
const userChoice = clickEvent.target.value

if (userChoice === "eateryObject.businessName") 
{    console.log(`${****USERCHOICE****}`) }
   
 }

 NOW I NEED TO TAKE THIS AND ADAPT A CONST THAT WORKS WITH MY HTML CONVERSION


 const showHolyFish = () => {
  //Get holy fish array
  const holyFishArray = mostHolyFish();
//iterate holyFish array
  for (const holyFishObject of holyFishArray) {
     const holyFishHTMLRepresentation = fishConverter(holyFishObject)
     const fishArticleElement = document.querySelector(".fishList")
     fishArticleElement.innerHTML += holyFishHTMLRepresentation
  } 
  ----------------------------------------------------------


 const showEatery = () => {
  const eateryArray = (selectedEatery);
//iterate eatery array
  for (const eateryCollection of eateryArray) {
     const eateryPreviewHTMLRepresentation = eateryPreviewConverter(eateryCollection)
     const eateryArticleElement = document.querySelector(".previewItinerary")
     eateryArticleElement.innerHTML += eateryHTMLRepresentation
  }

  
}
const eateryList = () => {
  showEatery()
}



  */




//function to show eateries in dropdown

const eateryList = () => {
    for (const currentEateryObject of eateryCollection) {
    const eateryHTML = eateryConverter(currentEateryObject);
    const eaterySelectElement = document.querySelector(".eateryChoice");
    eaterySelectElement.innerHTML += eateryHTML;
  }
 
}

