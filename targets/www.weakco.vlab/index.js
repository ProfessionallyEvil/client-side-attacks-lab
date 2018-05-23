const express = require('express');
const app = express();

const httpPort = 3003;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('helloWorld', { name: 'Bob' });
});

app.listen(httpPort, () =>
  console.log(`www.weakco.vlab listening on port ${httpPort}`)
);
