const loki = require("lokijs");
const uuid = require("uuid/v4");

const db = new loki("db.json");

exports.objects = db.addCollection("objects");
exports.session = db.addCollection("session");
