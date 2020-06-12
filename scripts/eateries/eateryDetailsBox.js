const eateryConverter = (eateryObject) => {
    const eateryHTML =  `
    
        <option value=${eateryObject.businessName} class="eateryOption">${eateryObject.businessName},${eateryObject.state}</option>
    
    `
   
    return eateryHTML;
}
