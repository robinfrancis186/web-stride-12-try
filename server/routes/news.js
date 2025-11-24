const express = require('express');
const router = express.Router();
const News = require('../models/News');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/news
// @desc    Get all news
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { category, limit } = req.query;

        let query = { isPublished: true };

        if (category) {
            query.category = category;
        }

        let newsQuery = News.find(query)
            .populate('author', 'name')
            .sort({ publishedAt: -1 });

        if (limit) {
            newsQuery = newsQuery.limit(parseInt(limit));
        }

        const news = await newsQuery;

        res.json({
            success: true,
            count: news.length,
            data: news,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/news/:id
// @desc    Get single news article
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id)
            .populate('author', 'name email');

        if (!news) {
            return res.status(404).json({
                success: false,
                message: 'News article not found',
            });
        }

        // Increment views
        news.views += 1;
        await news.save();

        res.json({
            success: true,
            data: news,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/news
// @desc    Create news article
// @access  Private/Admin
router.post('/', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const newsData = {
            ...req.body,
            author: req.user.id,
        };

        if (req.body.isPublished) {
            newsData.publishedAt = new Date();
        }

        const news = await News.create(newsData);

        res.status(201).json({
            success: true,
            data: news,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/news/:id
// @desc    Update news article
// @access  Private/Admin
router.put('/:id', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        let news = await News.findById(req.params.id);

        if (!news) {
            return res.status(404).json({
                success: false,
                message: 'News article not found',
            });
        }

        // If publishing for the first time
        if (req.body.isPublished && !news.isPublished) {
            req.body.publishedAt = new Date();
        }

        news = await News.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: news,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
