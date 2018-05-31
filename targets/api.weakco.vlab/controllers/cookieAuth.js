const db = require('../config/db');
const uuid = require('uuid/v4');

exports.auth_login_post = (req, res) => {
  //DONT DO YOUR AUTH LIKE THIS (this is a vulnerable app with craptastic auth)
  let sent = false;
  console.log(req.body);
  if (req.body.username && req.body.password) {
    let user = db.users.findOne({ username: req.body.username });
    if (user !== null) {
      if (user.password === req.body.password) {
        //authenticate
        let sessionId = uuid();
        db.session.insert({ id: sessionId, expiry: 'later', user: user });
        res.cookie('SESSION', sessionId);
        sent = true;
        res.json({ status: 200, message: 'authed' });
      }
    }
    //invalid user or password
    if (!sent) {
      res.json({ status: 403, message: 'Bad credentials' });
    }
  } else {
    //malformed request
    res.json({
      status: 400,
      message: 'Username and password must be supplied.'
    });
  }
};

exports.auth_logout_delete = (req, res) => {
  db.session.remove(req.session);
  res.json({ status: 200, message: 'deauthed' });
};
