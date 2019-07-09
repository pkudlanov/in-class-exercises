const fs = require('fs');

const stream = fs.createReadStream('./dogs.txt', { encoding: 'utf8' });
const wStream = fs.createWriteStream('super-dogs.txt');

const cRdStream = fs.createReadStream('./super-dogs.txt', { encoding: 'utf8' });
const cWrStream = fs.createWriteStream('copy.txt');

stream.on('data', console.log);

wStream.write('Balloon is the best hunter east of the Mississippi!');
wStream.end();

cRdStream.on('data', data => {
    cWrStream.write(data);
});

cWrStream.on('end', () => {
    cWrStream.end();
});
