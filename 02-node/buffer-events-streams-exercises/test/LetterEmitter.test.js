const LetterEmitter = require('../lib/LetterEmitter');

describe('splits a string and emits an event for each letter', () => {
    let letterEmitter;
    beforeEach(() => {
        letterEmitter = new LetterEmitter();
    });

    it('fires the letter event for each letter in an string', (done) => {
        const str = 'I am USB type C.';
        const callback = jest.fn();
    
        letterEmitter.on('letter', callback);

        letterEmitter.once('end', () => {
            str.split('').forEach((letter, offset) => {
                expect(callback).toHaveBeenCalledWith({ letter, offset });
            });

            done();
        });

        letterEmitter.read(str);
    });
});
