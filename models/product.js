const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number },
  image: { type: String },
  instock: { type: Boolean },
  category: { type: String },
}); 

const Product = mongoose.model('Product', productSchema);
module.exports = Product;