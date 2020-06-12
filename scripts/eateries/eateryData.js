

let eateryCollection = [];

const getEateryData = () => {
    return fetch("http://holidayroad.nss.team/eateries").then( 
        (httpResponse) => {
            return httpResponse.json(); 
        }
    ).then((arrayOfEateries) => {
        eateryCollection = arrayOfEateries;
        console.log(eateryCollection);
    })
}