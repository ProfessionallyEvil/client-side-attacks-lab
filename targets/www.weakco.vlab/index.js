const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);

const db = require('./data/db');
const uuid = require('uuid/v4');

const auth = require('./middleware/requireauth');

const httpPort = 3004;

app.use(
  session({
    store: new LokiStore({}),
    secret: 'bal ym kcatta',
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/balance');
});

app.get('/login', (req, res) => {
  let params = {
    msg: req.query.msg || '',
    username: req.query.username || '',
    redirectUrl: req.query.requrl || '/balance'
  };
  if (req.session.authenticated === true) {
    res.redirect(params.redirectUrl);
  } else {
    res.render('login', params);
  }
});

app.post('/login', (req, res) => {
  let user = db.user.findOne({
    username: req.body.username,
    password: req.body.password
  });
  if (user !== null) {
    req.session.authenticated = true;
    req.session.user = user;
    res.redirect(req.body.redirectUrl);
  } else {
    res.redirect(
      `/login?msg=Invalid+username+or+password&username=${
        req.body.username
      }&requrl=${req.body.redirectUrl || '/balance'}`
    );
  }
});

app.all('/logout', auth, (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});

app.get('/balance', auth, (req, res) => {
  let params = {
    user: req.session.user,
    view: 'balance'
  };
  res.render('balance', params);
});

app.get('/transfer/:ccy?', auth, (req, res) => {
  let params = {
    user: req.session.user,
    view: 'transfer',
    selectedCurrency: req.params.ccy || null,
    friends: db.user.find({ id: { $not: { $eq: req.session.user.id } } })
  };
  res.render('transfer', params);
});

app.post('/transfer', auth, (req, res) => {
  //TODO: Add validation for transfers
  req.session.transaction = {
    ccy: req.body.currency,
    amt: req.body.amount,
    to: db.user.findOne({ id: Number(req.body.recipient) })
  };
  res.redirect('/confirmTransfer');
});

app.get('/confirmTransfer', auth, (req, res) => {
  let params = {
    user: req.session.user,
    view: 'transfer',
    transfer: req.session.transaction,
    recipient: req.session.transaction.to
  };
  res.render('confirmTransfer', params);
});

app.post('/confirmTransfer', auth, (req, res) => {
  if (req.session.transaction) {
    let amt = req.session.transaction.amt;
    let ccy = req.session.transaction.ccy;
    req.session.user.balance[ccy] -= amt;
    req.session.transaction.to.balance[ccy] += amt;
    db.user.update(req.session.transaction.to);
    db.user.update(req.session.user);
    res.redirect('/balance');
  } else {
    //TODO: Handle no valid transaction case
  }
});

app.get('/sendbyemail/:ccy?', auth, (req, res) => {
  let params = {
    user: req.session.user,
    view: 'email',
    selectedCurrency: req.params.ccy || null
  };
  res.render('email', params);
});

app.post('/sendbyemail', auth, (req, res) => {
  let transactionId = uuid();
  db.emailTransfer.insert({
    id: transactionId,
    sender: req.session.user.id,
    toAddress: req.body.toemail,
    amount: req.body.amount,
    currency: req.body.currency,
    confirmed: false,
    collected: false
  });
  let params = {
    view: 'email',
    user: req.session.user,
    transactionId: transactionId
  };
  res.render('confirmemail', params);
});

app.post('/confirmemail', auth, (req, res) => {
  let transfer = db.emailTransfer.findOne({ id: req.body.transactionId });
  transfer.confirmed = true;
  req.session.user.balance[transfer.currency] -= transfer.amount;
  db.emailTransfer.update(transfer);
  db.user.update(req.session.user);
  res.redirect('/balance');
});

app.get('/profile', auth, (req, res) => {
  let params = {
    user: req.session.user,
    msg: req.query.msg || '',
    view: 'profile'
  };
  res.render('profile', params);
});

app.listen(httpPort, () =>
  console.log(`www.weakco.vlab listening on port ${httpPort}`)
);
