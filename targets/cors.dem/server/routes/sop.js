const express = require("express");
const router = express.Router();

const sessionLoader = require("../middleware/cookieSessionLoader");
const sessionBouncer = require("../middleware/cookieSessionBouncer");

const dataCtrlr = require("../controllers/data");

router.use(sessionLoader);
router.use(sessionBouncer);

router.get("/object", dataCtrlr.list_objects);
router.post("/object", dataCtrlr.create_object);
router.get("/object/:uid", dataCtrlr.read_object);
router.put("/object/:uid", dataCtrlr.update_object);
router.delete("/object/:uid", dataCtrlr.delete_object);

module.exports = router;
