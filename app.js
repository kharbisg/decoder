const express = require('express');
const fs = require('fs')

const app = express();

const exchanges = JSON.parse(fs.readFileSync(`${__dirname}/config_data/supported_exchanges.json`))

const getAllExchanges = (req, res) => {
    res.status(200).json({
        'status': 'success',
        'exchanges': exchanges});
};

const getParsedOutput = (req, res) => {
    res.status(200).json({"input_data": "", "parsed_data": ""});
};

app.get('/api/v1/exchanges', getAllExchanges);
app.get('/api/v1/parsed_output/:exchange/:source/:hex_string', getParsedOutput);

const port = 3000;
app.listen(port, () =>{
    console.log('App running on port', port)
});