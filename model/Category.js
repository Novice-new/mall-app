const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Category = sequelize.define('Category',
  {
    // 种类名称
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
)
module.exports = Category;