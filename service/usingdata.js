const Usingdata = require('../model/Usingdata');
const { pick } = require('../utils/propHelp');

exports.add = async function (obj) {
  obj = pick(obj, 'date', 'visitor', 'orders', 'orderRate');
  const result = await Usingdata.create(obj);
  return result.toJSON();
}
exports.delete = async function (id) {
  return await Usingdata.destroy({
    where: {
      id,
    }
  });
}
exports.getData = async function (limit = 6) {
  const result = await Usingdata.findAll(
    {
      order: [['id', 'DESC']],
      limit: +limit,
      attributes: ['id', 'date', 'visitor', 'orders', 'orderRate'],
    }
  );
  return JSON.parse(JSON.stringify(result));
}