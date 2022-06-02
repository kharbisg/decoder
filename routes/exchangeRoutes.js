const express = require('express');
const exchangeController = require('../controllers/exchangeController.js');

const router = express.Router();

router.route('/').get(exchangeController.getAllExchanges);
router
  .route('/:exchange/:source/:hex_string')
  .get(exchangeController.getParsedOutput);

module.exports = router;
