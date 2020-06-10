const stateConverter = (stateObject) => {
    const stateHTMLRepresentation =  `
        <option class="stateOption">${stateObject.name}</option>
    `
    return stateHTMLRepresentation;
}