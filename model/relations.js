const Category = require('./Category');
const CItem = require('./CItem');
const Product = require('./Product');
Category.hasMany(CItem, {
  constraints: false,
})
CItem.belongsTo(Category, {
  constraints: false,
});
CItem.hasMany(Product, {
  constraints: false,
})
Product.belongsTo(CItem, {
  constraints: false,
});