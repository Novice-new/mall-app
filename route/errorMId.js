const { getErr } = require('./resultHelp');
module.exports = (err, req, res, next) => {
  if (err) {
    const errObj = err instanceof Error ? err.message : err;
    res.status(403).send(getErr(errObj));
  } else {
    next();
  }
}