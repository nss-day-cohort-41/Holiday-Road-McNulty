//function to show bizarraries in dropdown
const bizarreList = () => {
    for (const currentBizarreObject of bizarreCollection) {
    const bizarreHTML = bizarreConverter(currentBizarreObject);
    const bizarreSelectElement = document.querySelector(".bizarreChoice");
    bizarreSelectElement.innerHTML += bizarreHTML;
  }

}
