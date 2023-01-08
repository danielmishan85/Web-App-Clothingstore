const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const HttpError = require('./models/http-error');

const server = express();
mongoose.set('strictQuery', true);

server.use(bodyParser.json());
server.use(cors());

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //every port can send
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

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

mongoose
  .connect(
    'mongodb+srv://Danielmishan:Danielush7598@cluster0.cwwwndg.mongodb.net/clothingStore?retryWrites=true&w=majority'
  )
  .then(() => {
    server.listen(5000, () => console.log('connected to db'));
  })
  .catch((err) => console.log(err));
