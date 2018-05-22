const loki = require("lokijs");
const uuid = require("uuid/v4");

const db = new loki("db.json");

const firstCompanyId = uuid();
const secondComanyId = uuid();

exports.session = db.addCollection("session");

exports.companies = (function() {
  let companies = db.addCollection("companies");

  return companies;
})();

exports.users = (function() {
  let users = db.addCollection("users");
  users.insert({
    id: uuid(),
    username: "jdoe@weakco.vlab",
    password: "Password",
    companyId: firstCompanyId
  });
  return users;
})();
