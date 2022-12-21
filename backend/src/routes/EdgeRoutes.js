// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const EdgeController = require('../controllers/EdgeController');

//POST
routes.post('/create', EdgeController.store);

module.exports = routes;