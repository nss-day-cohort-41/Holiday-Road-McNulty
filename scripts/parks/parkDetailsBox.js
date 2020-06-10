const parkConverter = (parkObject) => {
    const parkHTMLRepresentation =  `
        <option value="${parkObject.name}" class="parkOption">${parkObject.name}</option>
    `
    return parkHTMLRepresentation;
}

// trying to get this to work please kill me 
// const parkDetailsConverter = (parkObject) => {
//     const parkDetailsHTML = `
//     Park Name: ${parkObject.data.name}
//     Address: ${parkObject.data.addresses[0].line1} ${parkObject.data.addresses[0].city} ${parkObject.data.addresses[0].stateCode} ${parkObject.data.addresses[0].postalCode}
//     Entrance Fee: ${parkObject.data.entraceFees[0].cost}
//     Description: ${parkObject.data.description}
//     `
//     return parkDetailsHTML
// }

// console.log(parkDetailsConverter)