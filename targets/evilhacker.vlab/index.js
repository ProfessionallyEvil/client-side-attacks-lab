const express = require('express');
const cors = require('cors');

const app = express();

const httpPort = 3007;

app.use(cors());

app.use(express.static('../../payloads'));

app.post('/log', function(request, respond) {
  var body = '';
  filePath = __dirname + '../../payloads/logs/data.txt';
  request.on('data', function(data) {
    body += data;
  });

  request.on('end', function() {
    fs.appendFile(filePath, body, function() {
      respond.end();
    });
  });
});

app.listen(httpPort, () =>
  console.log(`evilhacker.vlab listening on port ${httpPort}`)
);
