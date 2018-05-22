const express = require("express");
const router = express.Router();

const cors = require("cors");
const sessionLoader = require("../middleware/cookieSessionLoader");
const sessionBouncer = require("../middleware/cookieSessionBouncer");

const authCtrlr = require("../controllers/cookieAuth");
const userCtrlr = require("../controllers/user");

router.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);
router.use(sessionLoader);

router.post("/authenticate", authCtrlr.auth_login_post);
router.delete("/authenticate", authCtrlr.auth_logout_delete);
router.get("/helloworld", sessionBouncer, (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/users", userCtrlr.user_list_get);
router.post("/users", userCtrlr.user_create_post);

module.exports = router;
