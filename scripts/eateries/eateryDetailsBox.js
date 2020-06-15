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

//Converter for EATERY DETAILS BOX 
const eateryDetailConverter = (eateryDetailObject) => {
    const eateryDetailHTMLRep = `
        <ul>
            <li>Name: ${eateryDetailObject.businessName}</li>
            <li>Description: ${eateryDetailObject.description}</li>
            <li>Location: ${eateryDetailObject.city}, ${eateryDetailObject.state}</li>
            
            <ul>
            <li>Restrooms? ${eateryDetailObject.ameneties.restrooms}</li>
            <li>Diaper Facility? ${eateryDetailObject.ameneties.diaperFacility}</li>
            <li>Playground?${eateryDetailObject.ameneties.playground}</li>
            <li>Pet Friendly? ${eateryDetailObject.ameneties.petFriendly}</li>
            <li>Wifi? ${eateryDetailObject.ameneties.wifi}</li>
            <li> Wheelchair Accessible? ${eateryDetailObject.ameneties.wheelchairAccessible}</li>
            </ul>
            
        </ul>
    `
    return eateryDetailHTMLRep;
}