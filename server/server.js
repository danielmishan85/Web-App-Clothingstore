const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const HttpError = require('./models/http-error');

const server = express();

server.use(bodyParser.json());

server.use('/api/products', productsRoutes);
server.use('/api/users', userRoutes);
server.use('/api/orders', orderRoutes);

server.use((req, res, next) => {
  return next(new HttpError('Could not find this route.', 404));
});

server.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

server.listen(5000);
