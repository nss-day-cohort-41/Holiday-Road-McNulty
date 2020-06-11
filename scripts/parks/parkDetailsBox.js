const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}</option>
    `
    return parkHTMLRepresentation;
}
// delete from here- trial code to make park name appear in preview list (html representation)

const parkPreviewConverter = (parkObject) => {
    const parkPreviewHTMLRepresentation = `
        <div>${parkObject.name}</div>
    `
    return parkPreviewHTMLRepresentation;
}
