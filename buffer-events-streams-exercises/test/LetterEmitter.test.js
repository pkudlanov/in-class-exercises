const LetterEmitter = require('../lib/LetterEmitter');

describe('splits a string and emits an event for each letter', () => {
    let letterEmitter;
    beforeEach(() => {
        letterEmitter = new LetterEmitter();
    });

    it('fires the letter event for each letter in an string', (done) => {
        const str = 'I am USB type C.';
        
        letterEmitter.on('letter', letter => {
            expect(str).toContainEqual(letter);
        });

        letterEmitter.end('end', () => {
            done();
        });

        letterEmitter.read(str);
    });
});
