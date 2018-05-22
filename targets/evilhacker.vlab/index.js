const express = require("express");
const cors = require("cors");

const app = express();

const httpPort = 3000;

app.use(cors());

app.use(express.static("public"));

app.listen(httpPort, () =>
  console.log(`evilhacker.vlab listening on port ${httpPort}`)
);
