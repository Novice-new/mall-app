const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = sequelize.define('User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPwd: {
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
module.exports = User;