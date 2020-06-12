
<<<<<<< HEAD
=======

>>>>>>> b2b4f8efba0e8176c86f5abf4307d271c9e1df04
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

