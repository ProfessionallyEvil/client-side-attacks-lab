const express = require('express');
const cors = require('cors');

const app = express();

const httpPort = 3007;

app.use(cors());

app.use(express.static('../../payloads'));

app.listen(httpPort, () =>
  console.log(`evilhacker.vlab listening on port ${httpPort}`)
);
