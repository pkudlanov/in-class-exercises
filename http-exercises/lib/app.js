const { createServer } = require('http');
const { parse } = require('url');

const makeHtml = greeting => {
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>${greeting}</h1>
    </body>
    </html>
    `;
};

const app = createServer((req, res) => {
    const { pathname } = parse(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(pathname === '/'){
        res.end(makeHtml('Welcome'));
    } else if(pathname === '/blue'){
        res.end(makeHtml('blue'));
    } else if(pathname === '/red'){
        res.end(makeHtml('red'));
    } else if(pathname === '/green'){
        res.end(makeHtml('green'));
    } else {
        res.statusCode = 404;
        res.end(makeHtml('Not found'));
    }
});

module.exports = app;
