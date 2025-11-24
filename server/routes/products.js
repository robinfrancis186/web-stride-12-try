const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { category, search, sort } = req.query;

        let query = { isActive: true };

        // Filter by category
        if (category) {
            query.category = category;
        }

        // Search by name or description
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }

        let products = Product.find(query);

        // Sort
        if (sort === 'price-asc') {
            products = products.sort({ price: 1 });
        } else if (sort === 'price-desc') {
            products = products.sort({ price: -1 });
        } else if (sort === 'name') {
            products = products.sort({ name: 1 });
        } else {
            products = products.sort({ createdAt: -1 });
        }

        const result = await products;

        res.json({
            success: true,
            count: result.length,
            data: result,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.json({
            success: true,
            data: product,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/products
// @desc    Create product
// @access  Private/Admin
router.post('/', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            data: product,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/products/:id
// @desc    Update product
// @access  Private/Admin
router.put('/:id', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.json({
            success: true,
            data: product,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   DELETE /api/products/:id
// @desc    Delete product
// @access  Private/Admin
router.delete('/:id', protect, authorize('central_admin'), async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.json({
            success: true,
            data: {},
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
