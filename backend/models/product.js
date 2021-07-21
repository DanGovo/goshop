const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name must not exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product price must not exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                "Agriculture",
                "Beauty & Presonal Care",
                "Business Services",
                'Cermaics',
                "Chemicals",
                "Construction & Real Estate",
                "Consumer Electronics",
                "Electrical Equipment & Supplies",
                "Electronic components & Accessories",
                "Energy",
                "Environment",
                "Fashion Accessories",
                "Food & Beverage",
                "Furniture",
                "Gifts & Crafts",
                "Health & Medical",
                "Home & Garden",
                "Home Appliances",
                "Machinery",
                "Minerals & Mettalurgy",
                "Office & School Supplies",
                "Security & Protection",
                "Shoes & Accessories",
                "Sports & Entertainment",
                "Tools & Hardware",
                "Toys & Hobbies",
                "Vehicles & Accessories"
            ],
            message: 'Please select a correct category for the product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product stock must not exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);