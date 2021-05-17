exports.getErr = function (err = 'serve internal error') {
  return {
    status: "fail",
    msg: err,
  }
};
exports.getResult = function (data = []) {
  return {
    status: 'success',
    msg: '成功',
    data,
  }
};
exports.asynchandler = (handler) => {
  return async function (req, res, next) {
    try {
      const result = await handler(req, res, next);
      res.send(exports.getResult(result));
    } catch (err) {
      next(err);
    }
  }
}