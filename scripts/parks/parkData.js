let parkCollection = [];
const getParkData = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?stateCode=TN&sort=&api_key=vw3gSXfcGrhrPdn1uVdQBfCAqmTtbaL1VsFVDbNn").then( 
        (httpResponse) => {
            return httpResponse.json(); 
        }
    ).then((arrayOfParks) => {
        parkCollection = arrayOfParks;
        console.log(parkCollection);
    })
}