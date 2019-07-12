const { createConnection } = require('net');

const client = createConnection(7890, () => {
    client.write('Greetings');
    console.log('connected');

    setInterval(() => {
        client.write(new Date().toISOString());
    }, 1000);
});

client.on('data', chunk => {
    console.log(chunk.toString());
});
