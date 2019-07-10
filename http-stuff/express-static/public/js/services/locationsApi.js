export const getLocations = () => {
    return fetch('/api/v1/locations')
        .then(res => res.json())
        .then(locations => {
            console.log(locations);
        });
};
