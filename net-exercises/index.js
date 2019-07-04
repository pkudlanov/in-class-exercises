const { createServer } = require('net');

console.log('server started');

const server = createServer(sock => {
    console.log('client connected');
    sock.write('I will echo');

    sock.on('data', chunk => {
        sock.write(chunk);
    });
});

server.listen(7890);
