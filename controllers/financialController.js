const TransactionModel = require('../models/TransactionModel');

//obter todas: http://localhost:3001/api/transaction
//obter uma: http://localhost:3001/api/transaction?period=2020-07
module.exports.findAll = async (req, res) => {
  const period = req.query.period; //req.query = após '?'

  //condicao para o filtro no findAll
  var condition = period
    ? { yearMonth: { $regex: new RegExp(period), $options: 'i' } }
    : {};

  try {
    const data = await TransactionModel.find(condition);
    res.send(data);
    logger.info(`GET /transaction`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /transaction - ${JSON.stringify(error.message)}`);
  }
};
