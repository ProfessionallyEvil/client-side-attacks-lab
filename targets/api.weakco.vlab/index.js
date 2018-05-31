const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

const httpPort = 3002;

app.use(express.json());
app.use(cookieParser());

app.use(express.static('client'));

//Add routes
app.use('/v1', require('./routes/v1'));
app.use('/admin', require('./routes/admin'));

app.listen(httpPort, () =>
  console.log(`api.weakco.vlab listening on port ${httpPort}`)
);
