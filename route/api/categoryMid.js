const express = require('express');
const router = express.Router();
const { getResult, asynchandler } = require('../resultHelp');
const categorySev = require('../../service/categorySev');

router.get('/all', asynchandler(
  async (req, res) => {
    const result = await categorySev.getCategory();
    return result;
  }
));

module.exports = router;