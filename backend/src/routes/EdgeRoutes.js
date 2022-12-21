// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const EdgeController = require('../controllers/EdgeController');

//POST
routes.post('/create', EdgeController.store);
//GET
routes.get('/', EdgeController.index);
//PATCH
routes.patch('/update/:id', EdgeController.update);

module.exports = routes;