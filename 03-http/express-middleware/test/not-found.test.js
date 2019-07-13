const notFound = require('../lib/middleware/not-found');

describe('not found middleware', () => {
    it('if nothing is found it will parse an error to next', () => {
        const next = jest.fn();

        notFound(null, null, next);
        const expectedError = new Error('Not Found');
        expectedError.status = 404;

        expect(next).toHaveBeenCalledWith(expectedError);
    });
});
