//function to show bizarraries in dropdown
const bizarreList = () => {
    for (const currentBizarreObject of bizarreCollection) {
    const bizarreHTML = bizarreConverter(currentBizarreObject);
    const bizarreSelectElement = document.querySelector(".bizarreChoice");
    bizarreSelectElement.innerHTML += bizarreHTML;
    
  }

}

// const bizarreDropdown = document.querySelector(".bizarreChoice");
//     bizarreDropdown.addEventListener("change", clickEvent => {
//     const userChoice = clickEvent.target.value;

//   if (userChoice === ) {
//     console.log()
//   }
// })

