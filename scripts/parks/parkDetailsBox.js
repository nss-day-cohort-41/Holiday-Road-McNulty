// HTML Converter for PARK DROPDOWN DISPLAY
const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
    
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}</option>
    `
    return parkHTMLRepresentation;
}

// HTML Converter for PARKS PREVIEW BOX
const parkPreviewConverter = (parkPreviewObject) => {
    const parkPreviewHTMLRep = `
             
            <div class="Preview__Displayed">${parkPreviewObject.name}</div>
        
    `
    return parkPreviewHTMLRep
}

//HTML Converter for PARKS DETAILS BOX
const parkDetailsConverter = (parkDetailsObject) => {
    const parkDetailsHTMLRep = `

        <ul class="details"> 
            <li>Name:${parkDetailsObject.fullName}</li> 
            <li>Description:${parkDetailsObject.description}</li> 
            <li>Hours of Operation:${parkDetailsObject.operatingHours[0].description}</li> 
            <li>Entrance Fees:${parkDetailsObject.entranceFees[0].description}</li> 
            <li>Address:${parkDetailsObject.addresses[0].line1} ${parkDetailsObject.addresses[0].city}, ${parkDetailsObject.addresses[0].stateCode} ${parkDetailsObject.addresses[0].postalCode}</li> 
            <li>Directions:${parkDetailsObject.directionsUrl}</li> 
        </ul>
    
    `
    return parkDetailsHTMLRep;
}