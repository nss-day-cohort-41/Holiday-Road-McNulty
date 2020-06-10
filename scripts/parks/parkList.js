//function to show park in dropdown
const parkList = () => {
    for (const currentParkObject of parkCollection.data) {
    const parkHTML = parkConverter(currentParkObject);
    const parkSelectElement = document.querySelector(".parkChoice");
    parkSelectElement.innerHTML += parkHTML;
  }
}
