const express = require('express');
const route = express.Router({ mergeParams: true });
const registerControll = require('../controllers/registerController');

route.get("/register", registerControll.registerForm);
route.post("/register", registerControll.createNewUser);


module.exports = route;