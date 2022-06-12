const fs = require('fs');

const exchanges = JSON.parse(
  fs.readFileSync(`${__dirname}/../config_data/supported_exchanges.json`)
);

exports.getAllExchanges = (req, res) => {
  res.status(200).json({
    status: 'success',
    exchanges: exchanges,
  });
};

exports.getParsedOutput = (req, res) => {
  res.status(200).json({ input_data: '', parsed_data: '' });
};
