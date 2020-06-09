const eateryConverter = (eateryObject) => {
    const eateryHTMLRepresentation =  `
    
        <option class="eateryOption">${eateryObject.businessName}</option>
    
    `
    // , ${eateryObject.state}
    return eateryHTMLRepresentation;
}