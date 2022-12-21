const express = require('express');
const routes = express.Router();

// controller
const OrderController = require('../controllers/OrderController');

//GET
routes.get('/', OrderController.index);
//PATCH
routes.patch('/status/update/:id', OrderController.changePizzaStatus);

module.exports = routes;