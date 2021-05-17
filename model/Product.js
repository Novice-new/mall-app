const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Product = sequelize.define('Product',
  {
    // 标题
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 描述
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // 价格
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // 折扣价
    price_off: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    // 商品单位
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 商品状态，0位下架1位上架
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // 商品库存
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // 商品销量
    sale: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // 标签
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 描述图片
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    createdAt: false,
    paranoid: true,
  }
)
module.exports = Product;