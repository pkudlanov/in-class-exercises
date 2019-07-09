describe('buffer exercise test', () => {
    it('creates a buffer of length 10', () => {
        const something = Buffer.alloc(10);
        //console.log(something, 'something');
        expect(something).toHaveLength(10);
    });

    it('creates a buffer from a string', () => {
        const something = Buffer.from('Yo yo yo!');
        // console.log(something);
        // console.log(something.toString());
        expect(something.toString()).toEqual('Yo yo yo!');
        expect(something[0]).toEqual(89);
    });

    it('creates a buffer from a string then changes each character to 104', () => {
        const something = Buffer.from('Yo yo yo!');

        const newSomething = something.map(() => 104);
        console.log(newSomething);
        console.log(newSomething.toString());

        expect(something.toString()).toEqual('Yo yo yo!');
        expect(newSomething.toString()).toEqual('hhhhhhhhh');
    });

    it('creates a buffer from a hex code', () => {
        const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
        // console.log(smile.toString());
        expect(smile.toString()).toEqual('😁');
    });
});
