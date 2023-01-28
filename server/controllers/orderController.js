const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');
const product = require('../models/product');

const getAllOrders = async (req, res, next) => {
  let orders;
  try {
    orders = await Order.find({}, 'products totalPrice date creator');
  } catch (err) {
    return next(
      new HttpError('Fatching orders failed, please try again later.', 500)
    );
  }
  res.json({
    orders: orders.map((order) => order.toObject({ getters: true })),
  });
};

const getOrderById = async (req, res, next) => {
  const orderId = req.params.oid;
  let order;
  try {
    order = await Order.findById(orderId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find a order.', 500)
    );
  }

  if (!order) {
    return next(
      new HttpError('Could not find a order for the provided id.', 404)
    );
  }

  res.json({ order: order.toObject({ getters: true }) });
};

const getOrdersByUserEmail = async (req, res, next) => {
  const userEmail = req.params.uemail;

  let orders;
  try {
    orders = await Order.find({ creator: userEmail });
  } catch (err) {
    return next(
      new HttpError('Fatching orders failed, please try again later', 500)
    );
  }

  if (!orders || orders.length === 0) {
    return next(
      new HttpError('Could not find orders for the provided user id.', 404)
    );
  }

  res.json({
    orders: orders.map((order) => order.toObject({ getters: true })),
  });
};

const createOrder = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { products, totalPrice, date, creator } = req.body;

  const createdOrder = new Order({
    products,
    totalPrice,
    date,
    creator,
  });

  let user;
  try {
    user = await User.findOne({ email: creator });
  } catch (err) {
    return next(new HttpError('Creating order faild, please try again.', 500));
  }

  if (!user) {
    return next(new HttpError('Could not find user for provided id.', 404));
  }
  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdOrder.save({ session: sess });
    user.ordersList.push(createdOrder);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError('Creating order failed, please try again.', 500));
  }

  res.status(201).json({ order: createdOrder.toObject({ getters: true }) });
};

const updateOrder = async (req, res, next) => {
  const { products, totalPrice, date, creator } = req.body;
  const orderId = req.params.oid;

  let order;
  try {
    order = await Order.findById(orderId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update order', 500)
    );
  }

  order.products = products;
  order.totalPrice = totalPrice;
  order.data = date;
  order.creator = creator;

  try {
    await order.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update order', 500)
    );
  }

  res.status(200).json({ order: order.toObject({ getters: true }) });
};

const deleteOrder = async (req, res, next) => {
  const orderId = req.params.oid;
  let order;
  try {
    order = await Order.findById(orderId).populate('creator');
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete order', 500)
    );
  }

  if (!order) {
    return next(new HttpError('Could not find order for provided id', 404));
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await order.remove({ session: sess });
    order.creator.ordersList.pull(order);
    await order.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete order', 500)
    );
  }
  res.status(200).json({ message: 'Deleted order.' });
};

const getGraphData = async (req, res, next) => {
  let products = [];
  let productsObj = [];
  let orders;
  try {
    orders = await Order.find({}, 'products');
    products = await Product.find();
  } catch (err) {
    return next(
      new HttpError('Fatching orders failed, please try again later.', 500)
    );
  }

  orders.forEach((order) => {
    order.products.map((product) => { 
      productsObj.push(products.find(p => p.id === product._id.toString()))
    });
  });
console.log(productsObj)

  res.json({ products:  productsObj.map((order) => order.toObject({ getters: true }))});
};

exports.getAllOrders = getAllOrders;
exports.getOrderById = getOrderById;
exports.getOrdersByUserEmail = getOrdersByUserEmail;
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
exports.getGraphData = getGraphData;
