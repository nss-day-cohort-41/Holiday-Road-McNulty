const eateryConverter = (eateryObject) => {
    const eateryHTML =  `
    
        <option class="eateryOption">${eateryObject.businessName}</option>
    
    `
   
    return eateryHTML;
}






// Converter to send in new information to the preview dropdown
const EateryPreviewConverter = (eateryCollection, .businessName) =>{
    const eateryPreviewHTML =
`
    
<ul>
<li>${eateryCollection.buisnessName}</li>
<li> </li>
</ul>

`
 return eateryPreviewHTML;
}


