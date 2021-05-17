const express = require('express');
const router = express.Router();
const userSev = require('../../service/userSev');
const { asynchandler } = require('../resultHelp');

router.post('/', asynchandler(
  async (req, res) => {
    const result = await userSev.login(req.body);
    return result;
  }
));

module.exports = router;