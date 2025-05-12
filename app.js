// intializing
const express = require('express');
const MethodOverride = require('method-override');
const app = express();
const DatabaseConnection = require('./config/db_connection');


// *************
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));
DatabaseConnection();

// *************
app.get('/', (req, res) => {
    res.send('Hello!!!')
});

app.listen(3000, () => {
    console.log('service from port 3000');
});