const Usingdata = require('../model/Usingdata');
const Mock = require('mockjs');
let data = Mock.mock({
  "data|10": [
    {
      'date': '@date(MM-dd)',
      'visitor|1000-5000': 1,
      'orders|1000-2500': 1,
      'orderRate|0.1-3': 1,
    }
  ],
}).data;
Usingdata.bulkCreate(data);