const express = require('express');
const route = express.Router({ mergeParams: true });
const cartController = require('../controllers/cartController');

route.get('/', cartController.showCartItems);
route.post('/add/:productId', cartController.addToCart);


module.exports = route