const express = require('express');
const controller = require('../controllers/financialController.js');
const routes = express();

//TODO: ROTAS
routes.get('/', controller.findAll);
routes.get('/:id', controller.findOne);
routes.post('/', controller.create);

module.exports = routes;
