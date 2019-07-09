const fs = require('fs');

const readStream = fs.createReadStream('./dogs.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('dogs-copy.txt');

readStream.pipe(writeStream);
