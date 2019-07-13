const request = require('superagent');

function getRandomQuote(n) {
    return request(`http://futuramaapi.herokuapp.com/api/quotes/${n}`)
        .then(res => res.body);
}

module.exports = { getRandomQuote };
