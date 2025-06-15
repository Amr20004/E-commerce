const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String,},
    description: {type: String},
    price: {type: Number},
    qyt: {type: Number},
    image: {type: String},
    instock: {type: Boolean},
    catagory: {type: String}
}); 

const Product = mongoose.model('Product', productSchema);
module.exports = Product;