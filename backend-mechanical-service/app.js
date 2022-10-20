const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/products', routes.productsRoute);
app.use('/sales', routes.salesRoute);
app.use('/users', routes.usersRoute);

app.get('/', (_request, response) => {
  response.json({ message: 'Hello World!' });
});

module.exports = app;