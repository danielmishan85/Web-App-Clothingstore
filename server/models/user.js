const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  getSpam: { type: Boolean, required: true},
  type: { type: String, required: true},
  logedIn: {  type: Boolean},
  ordersList: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Order' }],
});

module.exports = mongoose.model('User', userSchema);
