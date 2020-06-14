let parkCollection = [];

//Responsible for fetching park list based on user selected state abbreviation
const getParkData = (userStateChoice) => {
    {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userStateChoice}&sort=&api_key=${keys.npsKey}`).then( 
        (httpResponse) => {
            return httpResponse.json(); 
        }
    ).then((arrayOfParks) => {
        parkCollection = arrayOfParks;
        parkList();
      }
     )
    }
}