// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const FlavorController = require('../controllers/FlavorController');

//POST
routes.post('/create', FlavorController.store);
//GET
routes.get('/', FlavorController.index);

module.exports = routes;