const bizarreConverter = (bizarreObject) => {
    const bizarreHTML = 
     `
      <option value="${bizarreObject.name}" class="bizarreOption">${bizarreObject.name}, ${bizarreObject.state}</option>
    `
    return bizarreHTML;
}


// Converter to send in new information to the preview dropdown

const bizarrePreviewConverter = (bizarreObject) =>{
    const bizarrePreviewHTML =
` 
<div class="Preview__Displayed">${bizarreObject.name}, ${bizarreObject.state}</div>
`
 return bizarrePreviewHTML;
}