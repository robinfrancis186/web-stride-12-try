const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
    },
    excerpt: {
        type: String,
        required: [true, 'Please add an excerpt'],
    },
    content: {
        type: String,
        required: [true, 'Please add content'],
    },
    category: {
        type: String,
        required: true,
        enum: ['Product Launch', 'Collaboration', 'Events', 'Expansion', 'Press', 'Achievement'],
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tags: [{
        type: String,
    }],
    isPublished: {
        type: Boolean,
        default: false,
    },
    publishedAt: {
        type: Date,
    },
    views: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('News', newsSchema);
