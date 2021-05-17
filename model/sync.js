require('./User');
require('./Category');
require('./CItem');
require('./Product');
const sequelize = require('./db');
sequelize.sync({ alter: true }).then(() => {
  console.log('所有模型同步完成');
}).catch(err => {
  console.log(err);
});