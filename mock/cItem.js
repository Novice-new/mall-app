const CItem = require('../model/CItem');
const Mock = require('mockjs');
const data = Mock.mock({
  "data|40": [
    {
      'name': "@cword(2)",
      'CategoryId|1-8': 1,
    }
  ],
}).data;
CItem.bulkCreate(data);