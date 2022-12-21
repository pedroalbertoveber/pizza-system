// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const DoughController = require('../controllers/DoughController');

//POST
routes.post('/create', DoughController.store);
//GET
routes.get('/', DoughController.index);
//PATCH
routes.patch('/update/:id', DoughController.update);

module.exports = routes;