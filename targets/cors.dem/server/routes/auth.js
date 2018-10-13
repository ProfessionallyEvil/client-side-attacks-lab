const express = require("express");
const router = express.Router();

const cors = require("cors");
const sessionLoader = require("../middleware/cookieSessionLoader");
const sessionBouncer = require("../middleware/cookieSessionBouncer");

const authCtrlr = require("../controllers/cookieAuth");

router.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);
router.use(sessionLoader);

router.post("/login", authCtrlr.auth_login_post);
router.post("/logout", authCtrlr.auth_logout_delete);

module.exports = router;
