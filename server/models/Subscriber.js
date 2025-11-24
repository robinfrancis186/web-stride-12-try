const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    preferences: {
        productUpdates: {
            type: Boolean,
            default: true,
        },
        events: {
            type: Boolean,
            default: true,
        },
        news: {
            type: Boolean,
            default: true,
        },
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
