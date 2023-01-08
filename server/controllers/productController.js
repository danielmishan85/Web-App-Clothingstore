const HttpError = require('../models/http-error');

let DUMMY_DATA = [
  {
    id: 'p1',
    productName: 'T-shirt',
    price: '20$',
    color: 'black',
    image: '',
    description: '',
  },
  {
    id: 'p2',
    productName: 'T-shirt',
    price: '20$',
    color: 'white',
    image: '',
    description: '',
  },
  {
    id: 'p3',
    productName: 'T-shirt',
    price: '20$',
    color: 'gray',
    image: '',
    description: '',
  },
];

const getAllProducts = (req, res) => {
  res.json({ DUMMY_DATA });
};

const getProductById = (req, res, next) => {
  const productId = req.params.pid;
  const product = DUMMY_DATA.find((p) => {
    return p.id === productId;
  });
  if (!product) {
    return next(
      new HttpError('Could not find a product for the provided id.', 404)
    );
  }
  res.json({ product });
};

const createProduct = (req, res, next) => {
  const { id, name, type, price, color, image, description } = req.body;
  const createdProduct = {
    id,
    name,
    type,
    price,
    color,
    image,
    description,
  };
  DUMMY_DATA.push(createdProduct);
  res.status(201).json({ product: createdProduct });
};

const updateProduct = (req, res, next) => {
  const { name, type, price, color, image, description } = req.body;
  const productId = req.params.pid;

  const updatedProduct = { ...DUMMY_DATA.find((p) => p.id === productId) };
  const productIndex = DUMMY_DATA.findIndex((p) => p.id === productId);
  updatedProduct.name = name;
  updatedProduct.type = type;
  updatedProduct.price = price;
  updatedProduct.color = color;
  updatedProduct.image = image;
  updatedProduct.description = description;

  DUMMY_DATA[productIndex] = updatedProduct;

  res.status(200).json({ product: updatedProduct });
};

const deleteProduct = (req, res, next) => {
  const productId = req.params.pid;
  DUMMY_DATA = DUMMY_DATA.filter((p) => p.id !== productId);

  res.status(200).json({ message: 'Deleted product!' });
};

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
