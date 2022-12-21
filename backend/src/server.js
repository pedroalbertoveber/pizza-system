//external modules;
const express = require('express');
const app = express();
const cors = require('cors');

// routes
const DoughRoutes = require('./routes/DoughRoutes');
const EdgeRoutes = require('./routes/EdgeRoutes');
const FlavorRoutes = require('./routes/FlavorRoutes');
const PizzaRoutes = require('./routes/PizzaRoutes');
const StatusRoutes = require('./routes/StatusRoutes');
const OrderRoutes = require('./routes/OrderRoutes');

require('./database/index');

// config express to get json response;
app.use(express.json());

// config routes;
app.use('/dough', DoughRoutes);
app.use('/edge', EdgeRoutes);
app.use('/flavor', FlavorRoutes);
app.use('/pizza', PizzaRoutes);
app.use('/status', StatusRoutes);
app.use('/order', OrderRoutes);

// solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

try {
  app.listen(3333);
  console.log("Conected to DataBase!");
} catch(err) {
  console.log(`ERROR: ${err}`);
}