//external modules;
const express = require('express');
const app = express();

// routes
const DoughRoutes = require('./routes/DoughRoutes');
const EdgeRoutes = require('./routes/EdgeRoutes');
const FlavorRoutes = require('./routes/FlavorRoutes');
const PizzaRoutes = require('./routes/PizzaRoutes');

require('./database/index');

// config express to get json response;
app.use(express.json());

// config routes;
app.use('/dough', DoughRoutes);
app.use('/edge', EdgeRoutes);
app.use('/flavor', FlavorRoutes);
app.use('/pizza', PizzaRoutes);


try {
  app.listen(3333);
  console.log("Conected to DataBase!");
} catch(err) {
  console.log(`ERROR: ${err}`);
}