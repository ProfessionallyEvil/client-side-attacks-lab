const db = require("../config/db");
const uuid = require("uuid/v4");

exports.user_create_post = (req, res) => {
  db.users.insert({
    id: uuid(),
    username: req.body.username,
    password: req.body.password
  });
  res.json({ status: 200, message: "Created" });
};

exports.user_list_get = (req, res) => {
  let users = db.users.find();
  res.json(users);
};
