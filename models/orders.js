const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
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
    },
    orderState: {
        type: String,
        enum: ["processing", "shipped", "delivered", "cancelled"],
        default: "processing"
    },
    userAddress: {type:String,required:true},
    orderCost: {type:Number,required:true},
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;