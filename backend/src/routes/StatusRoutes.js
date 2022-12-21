// external modules;
const express = require('express');
const routes = express.Router();

// controller;
const StatusController = require('../controllers/StatusController');

//POST
routes.post('/create', StatusController.store);
//GET
routes.get('/', StatusController.index);



module.exports = routes;