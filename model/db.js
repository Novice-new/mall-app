const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mallapp', 'root', '20000527', {
  dialect: 'mysql',
  host: 'localhost',
  logging: null,
})
module.exports = sequelize;