const express = require("express");

const app = express();

const httpPort = 3001;

app.use(express.static("public", { index: "index.html" }));

app.listen(httpPort, () =>
  console.log(`help.vlab listening on port ${httpPort}`)
);
