const TransactionModel = require('../models/TransactionModel');

//exemplo: http://localhost:3001/api/transaction/
module.exports.findAll = async (req, res) => {
  const name = req.query.name;
  try {
    const data = await TransactionModel.find();
    res.send(data);
    logger.info(`GET /transaction`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /transaction - ${JSON.stringify(error.message)}`);
  }
};
