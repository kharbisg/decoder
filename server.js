const app = require('./app');

const exchangeRouter = require('./routes/exchangeRoutes')
app.use('/api/v1/exchanges/', exchangeRouter);

const port = 3000;
app.listen(port, () =>{
    console.log('App running on port', port)
});