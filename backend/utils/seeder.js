const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabases = require('../config/database');

const products = require('../data/products');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabases();

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products successfully deleted!');

        await Product.insertMany(products)
        console.log('All products successfully added!');

        process.exit();
        
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();