const stateConverter = (stateObject) => {
    const stateHTMLRepresentation =  `
        <option value=${stateObject.abbreviation} class="stateOption">${stateObject.abbreviation}</option>
    `
    return stateHTMLRepresentation;
}