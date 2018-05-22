const db = require("../config/db");

module.exports = (req, res, next) => {
  let sessionId = req.cookies.SESSION;
  if (req.cookies.SESSION !== undefined) {
    let session = db.session.findOne({ id: sessionId });
    req.session = session;
  }
  next();
};
