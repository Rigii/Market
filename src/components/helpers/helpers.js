export const getDataFetch = (url) => {

    return fetch(url)
        .then(
            function(response) {
               return response.json()
            })
        .catch(
            ((reject) => {
                console.log('fail to load ' + reject);
                return null
            })
        );
};

