import { getLocations } from './services/locationsApi.js';

const root = document.getElementById('root');
const locationsList = document.createElement('ul');

getLocations()
    .then(locations => {
        locations.forEach(location => {
            const li = document.createElement('li');
            li.textContent = `Name: ${location.name}, Location: ${location.location}, Significance: ${location.significance}`;

            locationsList.appendChild(li);
        });
    });
    
root.appendChild(locationsList);
