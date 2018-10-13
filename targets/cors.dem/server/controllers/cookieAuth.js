const db = require("../config/db");
const uuid = require("uuid/v4");

exports.auth_login_post = (req, res) => {
  //DONT DO YOUR AUTH LIKE THIS - EVER
  let sent = false;
  console.log(req.body);
  if (req.body.username && req.body.password) {
    let sessionId = uuid();
    db.session.insert({
      id: sessionId,
      expiry: "later",
      user: req.body.username
    });
    res.cookie("SESSION", sessionId);
    sent = true;
    res.json({ status: 200, message: "Authenticated. Cookie returned." });
  } else {
    //malformed request
    res.json({
      status: 400,
      message: "Username and password must be supplied."
    });
  }
};

exports.auth_logout_delete = (req, res) => {
  db.session.remove(req.session);
  res.json({ status: 200, message: "Session deleted." });
};
