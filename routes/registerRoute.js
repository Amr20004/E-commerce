const express = require('express');
const route = express.Router({ mergeParams: true });
const registerControll = require('../controllers/registerController');

route.get("/register", registerControll.registerForm);


module.exports = route;