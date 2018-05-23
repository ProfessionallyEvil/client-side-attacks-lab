const loki = require('lokijs');
const uuid = require('uuid/v4');
const User = require('../models/User');

const db = new loki('db.json');

const firstCompanyId = uuid();
const secondComanyId = uuid();

exports.session = db.addCollection('session');

exports.companies = (function() {
  let companies = db.addCollection('companies');
  companies.insert({
    id: firstCompanyId,
    companyName: 'Weak Co'
  });
  companies.insert({
    id: secondComanyId,
    companyName: 'Boring Technologies'
  });
  return companies;
})();

exports.users = (function() {
  let users = db.addCollection('users');
  let user1 = User.create('jdoe@weakco.vlab', firstCompanyId);
  user1.password = 'Password';
  users.insert(user1);
  return users;
})();
