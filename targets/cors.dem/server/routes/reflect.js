const express = require("express");
const router = express.Router();

const cors = require("cors");
const sessionLoader = require("../middleware/cookieSessionLoader");
const sessionBouncer = require("../middleware/cookieSessionBouncer");

const dataCtrlr = require("../controllers/data");

const cors_options = {
  origin: true,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
};
router.use(cors(cors_options));

router.use(sessionLoader);
router.use(sessionBouncer);

router.options("*", cors(cors_options));
router.get("/object", dataCtrlr.list_objects);
router.post("/object", dataCtrlr.create_object);
router.get("/object/:uid", dataCtrlr.read_object);
router.put("/object/:uid", dataCtrlr.update_object);
router.delete("/object/:uid", dataCtrlr.delete_object);

module.exports = router;
