export const getLocations = () => {
    return fetch('/api/v1/locations')
        .then(res => res.json());
};
