const db = require("../config/db");
const uuid = require("uuid/v4");

exports.create_object = (req, res) => {
  let obj = req.body;
  if (!obj.name) {
    res.json({
      status: 400,
      msg: "name is a required attribute and was not supplied."
    });
  } else {
    obj._uid = uuid();
    db.objects.insert(obj);
    console.log(`Created object ${obj._uid} - ${obj.name}`);
    res.json({
      status: 200,
      msg: "Created object",
      data: {
        uid: obj._uid
      }
    });
  }
};

exports.update_object = (req, res) => {
  let obj = db.objects.findOne({ _uid: req.params.uid });
  if (obj) {
    let newObj = req.body;
    newObj["$loki"] = obj["$loki"];
    newObj._uid = req.params.uid;
    newObj.meta = obj.meta;
    db.objects.update(newObj);
    res.json({
      status: 200,
      msg: "Object updated",
      data: {
        uid: req.params.uid
      }
    });
  } else {
    res.json({
      status: 404,
      msg: "Object not found"
    });
  }
};

exports.delete_object = (req, res) => {
  let obj = db.objects.findOne({ _uid: req.params.uid });
  if (obj) {
    db.objects.remove(obj);
    res.json({
      status: 200,
      msg: "Object deleted.",
      data: {
        uid: req.params.uid
      }
    });
  } else {
    res.json({
      status: 404,
      msg: "Object not found"
    });
  }
};

exports.list_objects = (req, res) => {
  let objList = db.objects.find().map(item => {
    return { _uid: item._uid, name: item.name };
  });
  res.json({
    status: 200,
    data: objList
  });
  console.log("List objects");
};

exports.read_object = (req, res) => {
  let obj = db.objects.findOne({ _uid: req.params.uid });
  if (obj) {
    res.json({
      status: 200,
      data: obj
    });
  } else {
    res.json({
      status: 404,
      msg: "Object not found"
    });
  }
};
