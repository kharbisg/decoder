const exp = require('constants');
const express = require('express');
const morgan = require('morgan')

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const exchangeRouter = require('./routes/exchangeRoutes')
app.use('/api/v1/exchanges/', exchangeRouter);

module.exports = app;