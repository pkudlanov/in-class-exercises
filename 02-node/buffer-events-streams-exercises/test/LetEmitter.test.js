const LetEmitter = require('../lib/LetEmitter');

describe('LetEmitter test', () => {
    let le;
    beforeEach(() => {
        le = new LetEmitter();
    });

    it('emits the end event', done => {
        const str = 'hello';
        le.on('end', () => {
            done();
        });

        le.read(str);
    });

    it('emits and event for each letter in a string', done => {
        const str = 'hello';

        const firedEvents = [];
        le.on('letter', letterObj => {
            expect(str[letterObj.offset]).toEqual(letterObj.letter);
            firedEvents.push(letterObj);
        });

        le.on('end', () => {
            expect(firedEvents[0]).toEqual({
                letter: 'h',
                offset: 0
            });
            expect(firedEvents[1]).toEqual({
                letter: 'e',
                offset: 1
            });
            expect(firedEvents[2]).toEqual({
                letter: 'l',
                offset: 2
            });
            expect(firedEvents[3]).toEqual({
                letter: 'l',
                offset: 3
            });
            expect(firedEvents[4]).toEqual({
                letter: 'o',
                offset: 4
            });
            done();
        });

        le.read(str);
    });
});
