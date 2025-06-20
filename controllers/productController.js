const mongoose = require('mongoose');
const Product = require('../models/product');

module.exports.index = async (req, res) => {
    let products = await Product.find({})
    res.render('/pages/productsIndexPage',{products})
}