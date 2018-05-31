const db = require('../config/db');

//GET /accounts
exports.account_list_get = (req, res) => {
  let accounts = db.accounts.find({
    companyId: req.session.user.companyId
  });
  res.json(accounts);
};

//GET /account/:accountId/transactions
exports.account_transactions_get = (req, res) => {
  //TODO: validate account belongs to user's company (auth bypass)
  let transactions = db.transactions.find({
    accountId: req.params.accountId
  });
  res.json(transactions);
};
