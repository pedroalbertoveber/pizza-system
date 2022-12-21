const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

//models
const Dough = require('../models/Dough');
const Edge = require('../models/Edge');
const Flavor = require('../models/Flavor');
const Pizza = require('../models/Pizza');

const connection = new Sequelize(dbConfig);

Dough.init(connection);
Edge.init(connection);
Flavor.init(connection);
Pizza.init(connection)

//associations
Dough.associate(connection.models);
Edge.associate(connection.models);
Pizza.associate(connection.models);
Flavor.associate(connection.models);

module.exports = connection;
