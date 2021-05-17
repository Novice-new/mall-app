const Category = require('../model/Category');
const Mock = require('mockjs');
const data = Mock.mock({
  "data|8": [
    {
      'name': "@cword(5)",
    }
  ],
}).data;
Category.bulkCreate(data);