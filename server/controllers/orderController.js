const HttpError = require('../models/http-error');

let DUMMY_DATA = [
  {
    id: 'o1',
    totalPrice: 'T-shirt',
    products: [],
    creator: 'u1',
  },
];

const getAllOrders = (req, res) => {
  console.log('Get Request in Places');
  res.json({ DUMMY_DATA });
};

const getOrderById = (req, res, next) => {
  const orderId = req.params.oid;
  const order = DUMMY_DATA.find((o) => {
    return o.id === orderId;
  });
  if (!order) {
    return next(
      new HttpError('Could not find a order for the provided id.', 404)
    );
  }
  res.json({ order });
};

const createOrder = (req, res, next) => {
  const { id, totalPrice, products, creator } = req.body;
  const createdOrder = {
    id,
    totalPrice,
    products,
    creator,
  };
  DUMMY_DATA.push(createdOrder);
  res.status(201).json({ order: createdOrder });
};

const updateOrder = (req, res, next) => {
  const { totalPrice, products, creator } = req.body;
  const orderId = req.params.oid;

  const updatedOrder = { ...DUMMY_DATA.find((o) => o.id === orderId) };
  const oredrIndex = DUMMY_DATA.findIndex((o) => o.id === orderId);
  updatedOrder.totalPrice = totalPrice;
  updatedOrder.products = products;
  updatedOrder.creator = creator;

  DUMMY_DATA[oredrIndex] = updatedOrder;

  res.status(200).json({ order: updatedOrder });
};

const deleteOrder = (req, res, next) => {
  const orderId = req.params.oid;
  DUMMY_DATA = DUMMY_DATA.filter((o) => o.id !== orderId);

  res.status(200).json({ message: 'Deleted order!' });
};

exports.getAllOrders = getAllOrders;
exports.getOrderById = getOrderById;
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
