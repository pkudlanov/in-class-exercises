const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('has an index page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('Well Greetings Measly Earthlings!!!!'));
            });
    });

    it('has a list of locations route', () => {
        return request(app)
            .get('/api/v1/locations')
            .then(res => {
                expect(res.body).toEqual([
                    { name: 'Leaning Tower of Pisa', location: 'Europe', significance: 'Galileo' },
                    { name: 'Mt. Rushmour', location: 'South Dakota', significance: 'President Carvings' },
                    { name: 'St. Basils Cathedral', location: 'Moscow, Russia', significance: 'Symbol of Russia' }                    
                ]);
            });
    });
});
