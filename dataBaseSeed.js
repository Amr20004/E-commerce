const mongoose = require('mongoose');
const Product = require("./models/product")
const { products } = require("./productsData")
const DatabaseConnection = require("./config/db_connection")

DatabaseConnection();

let seed = async () => {
    try {
        await Product.deleteMany();
        for (let i = 0; i < products.length; i++) {
            let product = new Product({
                name: products[i].name,
                description: products[i].description,
                price: products[i].price,
                quantity: products[i].quantity,
                image: products[i].image,
                instock: products[i].quantity > 0 ? true : false,
                category: products[i].category
            });
            await product.save();
        }
        console.log("✅ Products seeded successfully!")
    } catch (err){
        console.error("❌ Error while seeding:", err);
    }
}

seed().then(() => {
    mongoose.connection.close();
})