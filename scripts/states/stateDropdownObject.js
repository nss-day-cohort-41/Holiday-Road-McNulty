//Creates a list of park options for the drop down based on user selected state

const stateConverter = (stateObject) => {
    const stateHTMLRepresentation =  `
        <option value="${stateObject.abbreviation}" class="stateOption">${stateObject.abbreviation}</option>
    `
    return stateHTMLRepresentation;
}