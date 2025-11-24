const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        enum: ['Mobility', 'Vision', 'Computing', 'Accessibility', 'Learning', 'Communication'],
    },
    image: {
        type: String,
        required: [true, 'Please add an image'],
    },
    images: [{
        type: String,
    }],
    tag: {
        type: String,
        enum: ['Best Seller', 'New', 'Pro', ''],
        default: '',
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    specifications: {
        type: Map,
        of: String,
    },
    features: [{
        type: String,
    }],
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
