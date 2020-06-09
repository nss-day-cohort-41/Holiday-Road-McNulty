//function to show park in dropdown
const parkList = () => {
    for (const currentParkObject of parkCollection) {
    const parkHTML = parkConverter(currentParkObject);
    const parkSelectElement = document.querySelector(".parkChoice");
    parkSelectElement.innerHTML += parkHTML;
  }

}
