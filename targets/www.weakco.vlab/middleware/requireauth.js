const qs = require('querystring');

module.exports = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    res.redirect('/login?requrl=' + qs.stringify(req.originalUrl));
  }
};
