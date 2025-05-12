// ********* intializing **********
const express = require('express');
const MethodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const passportLocalStrategy = require("passport-local").Strategy;
const connectMongo = require('connect-mongo');
const User = require('./models/user');
const app = express();
const DatabaseConnection = require('./config/db_connection');

// ********* session **************
const store = connectMongo.create({
  mongoUrl: "mongodb://127.0.0.1:27017/e-commerce",
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "topsecret",
  },
});
app.use(
  session({
    store,
    secret: "topsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);


// ********* passport *************
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ********* import routes ********
const registerRoute = require('./routes/registerRoute');


// *************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(MethodOverride('_method'));
DatabaseConnection();


// ******** Set Routes *******
app.use('/', registerRoute);


// *************
app.get('/', (req, res) => {
    res.send('Hello!!!')
});

app.listen(3000, () => {
    console.log('service from port 3000');
});