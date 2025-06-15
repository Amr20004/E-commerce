const express = require("express");
const route = express.Router({ mergeParams:true })
let homeController = require('../controllers/homeController');

route.get('/', homeController.homeRender);

module.exports = route;