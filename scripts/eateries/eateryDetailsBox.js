const eateryConverter = (eateryObject) => {
    const eateryHTML =  
    
    `
     <option value="${eateryObject.businessName}" class="eateryOption">${eateryObject.businessName}, ${eateryObject.state}</option>
     `
   
    return eateryHTML;
}



// Converter to send in new information to the preview dropdown
 const eateryPreviewConverter = (eateryObject) =>{
    const eateryPreviewHTML =

` 
<div class="Preview__Displayed">${eateryObject.businessName},${eateryObject.state}</div>
`
 return eateryPreviewHTML;
}