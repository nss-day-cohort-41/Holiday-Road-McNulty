const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
    
        <option value=${parkObject} class="parkOption">${parkObject.name}, ${parkObject.states}</option>
    
    `
    return parkHTMLRepresentation;
}