const { LetterEmitter } = require('../lib/LetterEmitter');

describe('splits a string and emits an event for each letter', done => {
    let letterEmitter;
    beforeEach(done => {
        letterEmitter = new LetterEmitter();
        done();
    });

    it('fires the item event for each item in an array', () => {
        const str = 'I am USB type C.';
        
        letterEmitter.on('item', letter => {
            expect(str).toContainEqual(letter);
        });

        letterEmitter.end('end', () => {
            done();
        });

        letterEmitter.iterate(names);
    });
});
