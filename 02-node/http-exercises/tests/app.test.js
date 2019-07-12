const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
    it('returns a welcome page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('Welcome'));
            });
    });
    it('returns a red page at red', () => {
        return request(app)
            .get('/red')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('red'));
            });
    });
    it('returns a green page at green', () => {
        return request(app)
            .get('/green')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('green'));
            });
    });
    it('returns a blue page at blue', () => {
        return request(app)
            .get('/blue')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('blue'));
            });
    });
    it('returns not found page for non existant url', () => {
        return request(app)
            .get('/anything')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.text).toEqual(expect.stringContaining('Not found'));
            });
    });
});
