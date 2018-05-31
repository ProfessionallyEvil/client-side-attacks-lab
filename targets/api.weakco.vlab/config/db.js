const loki = require('lokijs');
const uuid = require('uuid/v4');
const User = require('../models/User');

const db = new loki('db.json');

const firstCompanyId = uuid();
const secondCompanyId = uuid();

exports.session = db.addCollection('session');

exports.companies = (function() {
  let companies = db.addCollection('companies');
  companies.insert({
    id: firstCompanyId,
    companyName: 'Weak Co'
  });
  companies.insert({
    id: secondCompanyId,
    companyName: 'Boring Technologies'
  });
  return companies;
})();

let acctId1 = uuid();
let acctId2 = uuid();
let acctId3 = uuid();

exports.accounts = (function() {
  let accounts = db.addCollection('accounts');
  accounts.insert({
    id: acctId1,
    companyId: firstCompanyId,
    clientName: 'Some retail chain'
  });
  accounts.insert({
    id: acctId2,
    companyId: firstCompanyId,
    clientName: "Rob's Burgers"
  });
  accounts.insert({
    id: acctId3,
    companyId: secondCompanyId,
    clientName: 'Test company'
  });
  return accounts;
})();

exports.transactions = function() {
  let transactions = db.addCollection('transactions');
  //TODO: Use RNG to randomize transactions
  for (let i = 1; i < 20; i++) {
    transactions.insert({
      id: i,
      accountId: acctId1,
      amount: 10050,
      dir: 'C'
    });
  }
};

exports.users = (function() {
  let users = db.addCollection('users');
  let user1 = User.create('jdoe@weakco.vlab', firstCompanyId);
  user1.password = 'Password';
  users.insert(user1);
  return users;
})();
