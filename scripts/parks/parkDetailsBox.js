const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
    
        <option class="parkOption">${parkObject.name}, ${parkObject.states}</option>
    
    `
    return parkHTMLRepresentation;
}