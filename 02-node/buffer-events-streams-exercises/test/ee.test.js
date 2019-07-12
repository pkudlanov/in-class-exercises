const EventEmitter = require('events');

describe('module description', () => {
    it('emits and listens to events', done => {
        const ee = new EventEmitter();
        ee.on('we did it', done);

        ee.emit('we did it');
    });

    it('emits and listens to events with data', done => {
        const ee = new EventEmitter();
        ee.on('newDog', dog => {
            expect(dog).toEqual({
                name: 'balloon',
                age: 3,
                weight: '27lbs'
            });
            done();
        });

        ee.emit('newDog', {
            name: 'balloon',
            age: 3,
            weight: '27lbs'
        });
    });
});
