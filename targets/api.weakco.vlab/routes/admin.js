const express = require('express');
const router = express.Router();

const cors = require('cors');
const sessionLoader = require('../middleware/cookieSessionLoader');
const sessionBouncer = require('../middleware/cookieSessionBouncer');

const authCtrlr = require('../controllers/cookieAuth');
const userCtrlr = require('../controllers/user');
const companyCtrlr = require('../controllers/company');

router.use(
  cors({
    origin: /weakco\.vlab$/,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  })
);
router.use(sessionLoader);

router.post('/authenticate', authCtrlr.auth_login_post);
router.delete('/authenticate', authCtrlr.auth_logout_delete);

router.get('/users', userCtrlr.user_list_get);
router.post('/users', userCtrlr.user_create_post);
router.get('/companies', companyCtrlr.company_list_get);

module.exports = router;
