const db = require('../config/db');

exports.company_list_get = (req, res) => {
  let companies = db.companies.find();
  res.json(companies);
};
