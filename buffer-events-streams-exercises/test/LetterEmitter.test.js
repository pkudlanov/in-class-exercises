const LetterEmitter = require('../lib/LetterEmitter');

describe('splits a string and emits an event for each letter', done => {
    let letterEmitter;
    beforeEach(done => {
        letterEmitter = new LetterEmitter();
        done();
    });

    it('fires the letter event for each letter in an string', () => {
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
