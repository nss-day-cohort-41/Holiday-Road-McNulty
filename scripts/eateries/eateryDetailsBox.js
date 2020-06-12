const eateryConverter = (eateryObject) => {
<<<<<<< HEAD
    const eateryHTML =  
=======
    const eateryHTML =  `
    
        <option value=${eateryObject.businessName} class="eateryOption">${eateryObject.businessName},${eateryObject.state}</option>
>>>>>>> b2b4f8efba0e8176c86f5abf4307d271c9e1df04
    
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

