
let parkCollection = [];

//Responsible for fetching park list based on user selected state
const getParkData = (userChoice) => {
    {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userChoice}&sort=&api_key=${keys.npsKey}`).then( 
        (httpResponse) => {
            return httpResponse.json(); 
        }
    ).then((arrayOfParks) => {
        parkCollection = arrayOfParks;
        parkList(parkCollection);
      }
     )
    }
}

