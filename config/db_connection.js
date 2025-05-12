const mongoose = require('mongoose');

const DatabaseConnection = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/e-commerce")
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("MongoDB Connection Error:", err));
}

module.exports = DatabaseConnection;