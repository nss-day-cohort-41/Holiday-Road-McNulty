// HTML Converter for park dropdown display
const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}</option>
    `
    return parkHTMLRepresentation;
}

// HTML Converter for details box
const parkDetailsConverter = (parkDetailsObject) => {
    const parkDetailsHTMLRep = `
             
        <ul>
            <li>Name: ${parkDetailsObject.name}</li>
            <li>Directions: ${parkDetailsObject.directionsUrl}</li>
        </ul>
        
    `
<<<<<<< HEAD
    return parkDetailsHTMLRep
}
/* <li>Entrance Fees: ${parkDetailsObject.entranceFees.description}</li>
            <li>Hours: ${parkDetailsObject.operatingHours[0].standardHours}</li>
            <li>Address: ${parkDetailsObject.addresses[0].line1}, ${parkDetailsObject.addresses[0].city}, ${parkDetailsObject.addresses[0].stateCode} ${parkDetailsObject.addresses[0].postalCode}}</li> */
=======
    return parkPreviewHTMLRepresentation;
}
>>>>>>> master
