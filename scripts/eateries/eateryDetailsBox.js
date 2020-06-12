const eateryConverter = (eateryObject) => {
    const eateryHTML =  `
    
        <option class="eateryOption">${eateryObject.businessName},${eateryObject.state}</option>
    
    `
   
    return eateryHTML;
}
