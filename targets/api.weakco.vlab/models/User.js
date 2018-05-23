const uuid = require('uuid/v4');

module.exports = class User {
  constructor(id, username, password, companyId, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.companyId = companyId;
    this.role = role;
  }

  static create(username, companyId) {
    return new User(uuid(), username, null, companyId, 1);
  }
};
