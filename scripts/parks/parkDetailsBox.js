const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}</option>
    `
    return parkHTMLRepresentation;
}
