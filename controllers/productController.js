const mongoose = require('mongoose');
const Product = require('../models/product');

module.exports.index = async (req, res) => {
    let products = await Product.find({})
    res.render('pages/productsIndexPage',{products})
}

module.exports.show = async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    if (!product) {
        req.flash('error', "can't find this product");
        return res.redirect('/product');
    }
    res.render('pages/productShowPage', { product });
}