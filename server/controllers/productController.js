const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const Product = require('../models/product');

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find(
      {},
      'title category type productName price img imgList desc'
    );
  } catch (err) {
    return next(
      new HttpError('Fatching products failed, please try again later.', 500)
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
    return next(
      new HttpError('Something went wrong, could not find a product.', 500)
    );
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

  const { title, category, type, productName, price, img, imgList, desc } =
    req.body;

  const createdProduct = new Product({
    title,
    category,
    type,
    productName,
    price,
    img,
    imgList,
    desc,
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
  const { title, category, type, productName, price, img, imgList, desc } =
    req.body;
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update product', 500)
    );
  }

  product.title = title;
  product.category = category;
  product.type = type;
  product.productName = productName;
  product.price = price;
  product.img = img;
  product.imgList = imgList;
  product.desc = desc;

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

const getProductsGroupByTitle = async (req, res, next) => {
  const { title } = req.body;
  let products;
  try {
    products = await Product.find({
      title: { $regex: `${title}`, $options: 'i' },
    });
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find any products.',
      500
    );
    return next(error);
  }
  if (!products) {
    const error = new HttpError('could not find Products', 500);
    return next(error);
  }
  res.json(products);
};

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getProductsGroupByTitle = getProductsGroupByTitle;
