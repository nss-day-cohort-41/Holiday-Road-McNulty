const bizarreConverter = (bizarreObject) => {
    const bizarreHTMLRepresentation =  `
    
        <option class="bizarreOption" value="foo">${bizarreObject.name}, ${bizarreObject.state}</option>
    
    `
    return bizarreHTMLRepresentation;
}

