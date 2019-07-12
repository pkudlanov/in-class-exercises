const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
    //** */read method is like iterate method 
    //** */instead of array we'll get string
    //** */need to split string to letters
    //** */for each letter it needs to emit event
    //event should include data
    //'{ letter: 'b', offset: 20 }'
    //when done emit end event
    //event should probably be called letter
    read(str) {
        const letterArr = str.split('');

        letterArr.forEach((letter, offset) => {
            this.emit('letter', { letter, offset });
        });

        this.emit('end');
    }
}

module.exports = LetterEmitter;
