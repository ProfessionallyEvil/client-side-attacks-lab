const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const bodyParser = require('body-parser');

const httpPort = 3007;

app.use(cors());

app.use(express.static('../../payloads'));

app.post('/log', bodyParser.text({type: '*/*'}), function(request, respond) {
  fs.writeFile("/home/vagrant/payloads/" + (new Date()).getTime() + '.log', request.body, function(err) {
	      if(err) {
		              return console.log(err);
		          }
    respond.sendStatus(200);
  }); 
});

app.listen(httpPort, () =>
  console.log(`evilhacker.vlab listening on port ${httpPort}`)
);
