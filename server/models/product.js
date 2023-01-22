const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  imgList: [{ type: String, required: true }],
  desc: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);