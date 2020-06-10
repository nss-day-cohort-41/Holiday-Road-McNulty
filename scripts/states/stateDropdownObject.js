const stateConverter = (stateObject) => {
    const stateHTMLRepresentation =  `
        <option class="stateOption">${stateObject.abbreviation}</option>
    `
    return stateHTMLRepresentation;
}