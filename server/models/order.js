const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Product' }],
  totalPrice: { type: String, required: true },
  date: { type: String, required: true },
  creator: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
