const Product = require('../model/Product');
const Mock = require('mockjs');
let data = Mock.mock({
  "data|20": [
    {
      'title': "@cword(5)",
      'desc': "@cword(12)",
      'CItemId|1-40': 1,
      'tags|2-3': ['@cword(2)'],
      'images|2-3': ['@url(http)'],
      'price|30-100': 1,
      'price_off': 0,
      'unit|1': ['克', '千克', '斤', '个'],
      'state|1-2': true,
      'inventory|50-200': 1,
      'sale|0-100': 1,
    }
  ],
}).data;
data.forEach(value => {
  value.tags = value.tags.join(',');
  value.images = value.images.join(',');
});
Product.bulkCreate(data);