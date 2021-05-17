const CItem = require('../model/CItem');
const { pick } = require('../utils/propHelp');

exports.add = async function (obj) {
  obj = pick(obj, 'name', 'CategoryId');
  const result = await CItem.create(obj);
  return result.toJSON();
}
exports.delete = async function (id) {
  return await CItem.destroy({
    where: {
      id,
    }
  });
}