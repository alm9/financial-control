const express = require('express');
const controller = require('../controllers/financialController.js');
const routes = express();

//TODO: ROTAS
routes.get('/', controller.findAll);

module.exports = routes;
