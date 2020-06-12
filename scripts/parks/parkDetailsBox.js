const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
    
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}, ${parkObject.states}</option>
    
    `
    return parkHTMLRepresentation;
}

// const targetEateryDropdown = document.querySelector(".eateryChoice")
// targetEateryDropdown.addEventListener("change", clickEvent => {
//     const userEateryChoice = clickEvent.target.value;
//     const contentTarget = document.querySelector(".previewEaterySelection");
//     contentTarget.innerHTML = userEateryChoice;
// })

const parkDetailsConverter = (parkDetailsObject) => {
    const parkDetailsHTMLRep = `
             
        <ul>
            
            <li>Directions: ${parkDetailsObject.directionsUrl}</li>
        </ul>
        
    `
    return parkDetailsHTMLRep
}
/* <li>Entrance Fees: ${parkDetailsObject.entranceFees.description}</li>
            <li>Hours: ${parkDetailsObject.operatingHours[0].standardHours}</li>
            <li>Address: ${parkDetailsObject.addresses[0].line1}, ${parkDetailsObject.addresses[0].city}, ${parkDetailsObject.addresses[0].stateCode} ${parkDetailsObject.addresses[0].postalCode}}</li> */