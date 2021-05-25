const { DataTypes } = require('sequelize');
const sequelize = require('./db');
// 日期 每日访问数量 每日下单用户 下单率
const Usingdata = sequelize.define('Usingdata',
  {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visitor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orders: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
)
module.exports = Usingdata;