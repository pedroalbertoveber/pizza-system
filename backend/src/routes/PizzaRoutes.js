// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const PizzaController = require('../controllers/PizzaController');

//POST
routes.post('/create', PizzaController.store);
//GET
routes.get('/', PizzaController.index);


module.exports = routes;