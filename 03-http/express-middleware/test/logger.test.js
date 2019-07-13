const logger = require('../lib/middleware/logger');

describe('logging middleware', () => {
    it('logs messages', () => {
        console.log = jest.fn();
        
        const req = {
            url: '/test',
            method: 'GET'
        };

        const next = jest.fn();

        logger(req, {}, next);

        expect(next).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('GET /test');
    });
});
