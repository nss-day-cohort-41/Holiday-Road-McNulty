//function to show eateries in dropdown
const eateryList = () => {
    for (const currentEateryObject of eateryCollection) {
    const eateryHTML = eateryConverter(currentEateryObject);
    const eaterySelectElement = document.querySelector(".eateryChoice");
    eaterySelectElement.innerHTML += eateryHTML;
  }

}
