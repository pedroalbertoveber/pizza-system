const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

//models
const Dough = require('../models/Dough');
const Edge = require('../models/Edge');
const Flavor = require('../models/Flavor');

const connection = new Sequelize(dbConfig);

Dough.init(connection);
Edge.init(connection);
Flavor.init(connection);

module.exports = connection;
