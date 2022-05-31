const exp = require('constants');
const express = require('express');
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// create a new subapp or router
const exchangeRouter = require('./routes/exchangeRoutes')

app.use('/api/v1/exchanges/', exchangeRouter);

const port = 3000;
app.listen(port, () =>{
    console.log('App running on port', port)
});