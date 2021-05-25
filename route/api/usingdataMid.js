const express = require('express');
const router = express.Router();
const { asynchandler } = require('../resultHelp');
const usingdataSev = require('../../service/usingdata');

router.get('/',
  asynchandler(
    async (req, res) => {
      const limit = req.query.limit || 6;
      const result = await usingdataSev.getData(limit);
      return result;
    }
  )
)

module.exports = router;