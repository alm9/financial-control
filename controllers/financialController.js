const TransactionModel = require('../models/TransactionModel');

//ver tudo: http://localhost:3001/api/transaction
//filtrar: http://localhost:3001/api/transaction?period=2020-07
module.exports.findAll = async (req, res) => {
  const period = req.query.period; //query string

  //condicao para o filtro no findAll
  var condition = period
    ? { yearMonth: { $regex: new RegExp(period), $options: 'i' } }
    : {};

  try {
    const data = await TransactionModel.find(condition);
    res.send(data);
    logger.info(`GET /transaction${period ? '?' + req.query : '/'}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar os documentos' });
    logger.error(`GET /transaction - ${JSON.stringify(error.message)}`);
  }
};

module.exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await TransactionModel.findById({ _id: id });
    res.send(data);
    logger.info(`GET /transaction/:id`);
  } catch (error) {
    res.status(500).send(`Erro ao buscar o id ${id} ${error}`);
  }
};

module.exports.create = async (req, res) => {
  const newRegistry = new TransactionModel(req.body);

  try {
    const data = await newRegistry.save(newRegistry);
    res.status(201).send(data);
    logger.info(`GET /create`);
  } catch (error) {
    res.status(500).send(`Erro ao criar - ${error}`);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const data = await TransactionModel.findByIdAndRemove(req.params.id);
    console.log(data);
    if (data === null) {
      res.status(404).send('ID não encontrada');
      logger.info(`DELETE /transaction/${req.params.id} (ID inexistente)`);
    }
    res.send(data);
    logger.info(`DELETE /transaction/${req.params.id}`);
  } catch (error) {
    res.status(500).send(`Erro ao excluir - ${error}`);
  }
};
