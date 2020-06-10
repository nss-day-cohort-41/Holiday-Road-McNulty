const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
    
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}, ${parkObject.states}</option>
    
    `
    return parkHTMLRepresentation;
}