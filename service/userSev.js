const User = require('../model/User');
const { pick } = require('../utils/propHelp');

exports.add = async function (obj) {
  obj = pick(obj, 'username', 'userPwd');
  const result = await User.create(obj);
  return result.toJSON();
}
exports.login = async function (obj) {
  const { username, userPwd } = obj;
  const result = await User.findOne({
    attributes: ['id', 'username'],
    where: {
      username,
      userPwd,
    }
  });
  if (result) {
    return result.toJSON();
  }
  return null;
}
exports.delete = async function (id) {
  return await User.destroy({
    where: {
      id,
    }
  });
}