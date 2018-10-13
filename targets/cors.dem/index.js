const express = require("express");

const cookieParser = require("cookie-parser");

const api = express();

const client = express();

const apiHttpPort = 3020;
const clientHttpPort = 3021;

api.use(express.json());
api.use(cookieParser());

client.use(express.static("client"));

//Add routes
api.use("/auth", require("./server/routes/auth"));
api.use("/sop", require("./server/routes/sop"));
api.use("/pattern", require("./server/routes/pattern"));

api.listen(apiHttpPort, () =>
  console.log(`cors.dem server listening on port ${apiHttpPort}`)
);

client.listen(clientHttpPort, () =>
  console.log(`cors.dem client available on port ${clientHttpPort}`)
);
