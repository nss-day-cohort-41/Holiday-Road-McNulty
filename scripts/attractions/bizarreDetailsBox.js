const bizarreConverter = (bizarreObject) => {
    const bizarreHTMLRepresentation = 
     `
      < option value="${bizarreObject.name}">${bizarreObject.name}, ${bizarreObject.state}</option>

    `
    return bizarreHTMLRepresentation;
}

const bizarrePreviewConverter = (bizarreObject) =>{
    const bizarrePreviewHTML =
` 
<div class="">${bizarreObject.name}, ${bizarreObject.state}</div>
`
 return bizarrePreviewHTML;
}

