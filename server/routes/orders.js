const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('orderItems.product', 'name image')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email')
            .populate('orderItems.product', 'name image price');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found',
            });
        }

        // Make sure user owns order or is admin
        if (order.user._id.toString() !== req.user.id && req.user.role !== 'central_admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this order',
            });
        }

        res.json({
            success: true,
            data: order,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', protect, async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No order items',
            });
        }

        // Verify products exist and have stock
        for (let item of orderItems) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `Product ${item.product} not found`,
                });
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient stock for ${product.name}`,
                });
            }
        }

        const order = await Order.create({
            user: req.user.id,
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        // Update product stock
        for (let item of orderItems) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: -item.quantity },
            });
        }

        res.status(201).json({
            success: true,
            data: order,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/orders/:id/status
// @desc    Update order status
// @access  Private/Admin
router.put('/:id/status', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const { status, isPaid, isDelivered } = req.body;

        const updateData = { status };

        if (isPaid !== undefined) {
            updateData.isPaid = isPaid;
            if (isPaid) {
                updateData.paidAt = Date.now();
            }
        }

        if (isDelivered !== undefined) {
            updateData.isDelivered = isDelivered;
            if (isDelivered) {
                updateData.deliveredAt = Date.now();
            }
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found',
            });
        }

        res.json({
            success: true,
            data: order,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/orders/admin/all
// @desc    Get all orders (admin)
// @access  Private/Admin
router.get('/admin/all', protect, authorize('central_admin'), async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate('user', 'name email')
            .populate('orderItems.product', 'name')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
