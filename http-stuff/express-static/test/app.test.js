const request = require('supertest');
const app = require('../lib');

describe('app routes', () => {
    it('has an index page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('Well Greetings Measly Earthlings!!!!'));
            });
    });
});
