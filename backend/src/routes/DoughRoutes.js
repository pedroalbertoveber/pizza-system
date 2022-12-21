// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const DoughController = require('../controllers/DoughController');

//POST
routes.post('/create', DoughController.store);

module.exports = routes;