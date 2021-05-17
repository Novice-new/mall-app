const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const CItem = sequelize.define('CItem',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
)
module.exports = CItem;