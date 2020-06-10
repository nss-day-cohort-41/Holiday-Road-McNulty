//function to show state in dropdown
const stateList = () => {
    for (const currentStateObject of stateCollection) {
    const stateHTML = stateConverter(currentStateObject);
    const stateSelectElement = document.querySelector(".stateChoice");
    stateSelectElement.innerHTML += stateHTML;
  }

}
