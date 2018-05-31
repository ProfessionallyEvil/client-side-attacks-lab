const loki = require('lokijs');

const db = new loki('db.json');

const nextInt = (() => {
  let next = 0;
  return () => {
    next++;
    return next;
  };
})();

function initUser(username, password, email, btc, ltc) {
  return {
    id: nextInt(),
    username: username,
    password: password,
    email: email || '',
    balance: {
      btc: btc || 0,
      ltc: ltc || 0
    }
  };
}

exports.user = (() => {
  let users = db.addCollection('user');
  users.insert(initUser('jdoe', 'Spring2018', 'jdoe@email.vlab', 0.0005, 0.04));
  users.insert(
    initUser(
      'victortimothy',
      'Good password',
      'vic.tim@email.vlab',
      500.0,
      40.0
    )
  );
  users.insert(
    initUser('tarengetz', 'Hack me', 'tar.getz@email.vlab', 0.34, 13.0)
  );
  return users;
})();

exports.emailTransfer = (() => {
  let emailTransfers = db.addCollection('emailtransfer');
  //{ id: guid, sender: userId, toAddress: string, curr: string, amount: number, confirmed: boolean, collected: boolean }
  return emailTransfers;
})();
