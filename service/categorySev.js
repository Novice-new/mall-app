const Category = require('../model/Category');
const CItem = require('../model/CItem');
const { pick } = require('../utils/propHelp');

exports.add = async function (obj) {
  obj = pick(obj, 'name');
  const result = await Category.create(obj);
  return result.toJSON();
};
exports.delete = async function (id) {
  return await Category.destroy({
    where: {
      id,
    }
  });
};
exports.getCategory = async function () {
  const result = await Category.findAndCountAll({
    attributes: ['name', 'id'],
    include: {
      model: CItem,
      attributes: ['name', 'id'],
    }
  });
  return {
    data: result.rows,
  }
}