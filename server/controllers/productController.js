const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const Product = require('../models/product');

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({}, 'name category image color price description');
  } catch (err) {
    return next(
      new HttpError('Fatching users failed, please try again later.', 500)
    );
  }
  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const getProductById = async (req, res, next) => {
  const prodactId = req.params.pid;
  let product;
  try {
    product = await Product.findById(prodactId);
  } catch (err) {
    return next(new HttpError(
      'Something went wrong, could not find a product.',
      500
    ));
  }

  if (!product) {
    return next(
      new HttpError('Could not find a product for the provided id.', 404)
    );
  }

  res.json({ product: product.toObject({ getters: true }) });
};


const createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, category, image, color, price, description } = req.body;

  const createdProduct = new Product({
    name,
    category,
    image,
    color,
    price,
    description,
  });

  try {
    await createdProduct.save();
  } catch (err) {
    return next(
      new HttpError('Creating product failed, please try again.', 500)
    );
  }

  res.status(201).json({ product: createdProduct.toObject({ getters: true }) });
};

const updateProduct = async (req, res, next) => {
  const { name, category, image, color, price, description } = req.body;
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update product', 500)
    );
  }

  product.name = name;
  product.category = category;
  product.image = image;
  product.color = color;
  product.price = price;
  product.description = description;

  try {
    await product.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update product', 500)
    );
  }

  res.status(200).json({ product: product.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete product', 500)
    );
  }
  try {
    await product.remove();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete product', 500)
    );
  }
  res.status(200).json({ message: 'Deleted product.' });
};

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
