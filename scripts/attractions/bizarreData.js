let bizarreCollection = [];

const getBizarreData = () => {
    return fetch("http://holidayroad.nss.team/bizarreries").then( 
        (httpResponse) => {
            return httpResponse.json(); 
        }
    ).then((arrayOfBizarraries) => {
        bizarreCollection = arrayOfBizarraries;
        console.log(bizarreCollection);
    })
}