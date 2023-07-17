const express = require('express');
const morgan = require('morgan');


const server = express();

module.exports = {
    response: require('./response'),
    catchedAsync: require('./catchedAsync'),
    errors: require('./errors')
}