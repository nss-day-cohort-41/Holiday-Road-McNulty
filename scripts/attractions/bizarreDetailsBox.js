const bizarreConverter = (bizarreObject) => {
    const bizarreHTMLRepresentation =  `
    
        <option class="bizarreOption">${bizarreObject.name}, ${bizarreObject.state}</option>
    
    `
    return bizarreHTMLRepresentation;
}

