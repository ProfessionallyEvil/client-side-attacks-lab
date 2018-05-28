const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);

const httpPort = 3003;

app.use(
  session({
    store: new LokiStore({}),
    secret: 'bal ym kcatta'
  })
);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('helloWorld', { name: 'Bob' });
});

app.get('/login', (req, res) => {
  let params = {
    msg: req.query.msg || '',
    username: req.query.username || '',
    redirectUrl: req.query.requrl || '/landing'
  };

  if (req.session.authenticated === true) {
    res.redirect(params.redirectUrl);
  } else {
    res.render('login', params);
  }
});

app.post('/login', (req, res) => {
  if (req.body.username === 'user' && req.body.password === 'password') {
    //stubbed in auth success
    req.session.authenticated = true;
    res.redirect(req.body.redirectUrl);
  } else {
    res.redirect(
      `/login?msg=Invalid+username+or+password&username=${
        req.body.username
      }&requrl=${req.body.redirectUrl || '/landing'}`
    );
  }
});

app.all('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});

app.listen(httpPort, () =>
  console.log(`www.weakco.vlab listening on port ${httpPort}`)
);
