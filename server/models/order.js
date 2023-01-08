const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: { type: Array, required:true},
  totalPrice: { type: Number, required: true },
  date: { type: String, required: true },
  creator: { type: String, required: true }, 
});

module.exports = mongoose.model('Order', orderSchema);