const eateryConverter = (eateryObject) => {
    const eateryHTML =  `
    
        <option class="eateryOption">${eateryObject.businessName},${eateryObject.state}</option>
    
    `
   
    return eateryHTML;
}




/* 

// Converter to send in new information to the preview dropdown
const eateryPreviewConverter = (eateryObject) =>{
    const eateryPreviewHTML =
`
    
<ul>
<li>${eateryObject.buisnessName}</li>
<li> </li>
</ul>

`
 return eateryPreviewHTML;
}

 */