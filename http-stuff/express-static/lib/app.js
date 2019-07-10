const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/api/v1/locations', (req, res) => {
    res.send([
        { name: 'Leaning Tower of Pisa', location: 'Europe', significance: 'Galileo' },
        { name: 'Mt. Rushmour', location: 'South Dakota', significance: 'President Carvings' },
        { name: 'St. Basils Cathedral', location: 'Moscow, Russia', significance: 'Symbol of Russia' }  
    ]);
});

module.exports = app;
