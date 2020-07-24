const express = require('express');
const controller = require('../controllers/financialController.js');
const routes = express();

routes.get('/', controller.findAll);
routes.get('/:id', controller.findOne);
routes.post('/', controller.create);
routes.delete('/:id', controller.delete);
routes.put('/:id', controller.update);

module.exports = routes;
