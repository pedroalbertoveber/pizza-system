const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

//models
const Dough = require('../models/Dough');

const connection = new Sequelize(dbConfig);

Dough.init(connection);

module.exports = connection;
