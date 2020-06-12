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
    return parkDetailsHTMLRep
}

