const productController = require('../controllers/productController')
const express = require("express");
const route = express.Router({ mergeParams: true });

route.get('/',productController.index)
