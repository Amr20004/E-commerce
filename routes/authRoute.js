const express = require('express');
const route = express.Router({ mergeParams: true });
const authControll = require('../controllers/authController');
let passport = require("passport");

route.get("/register", authControll.registerForm);
route.post("/register", authControll.createNewUser);
route.get("/login", authControll.loginForm);
route.post("/login", passport.authenticate("local",{failureFlash:"something went wrong", failureRedirect:"/login"}) , authControll.loginUser);
route.get("/logout", authControll.logout);

module.exports = route;