const mongoose = require('mongoose');

let cartSchema = new mongoose.Schema({
  products: [{
        product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        },
        quantity: {
        type: Number,
        default: 1,
        },
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;