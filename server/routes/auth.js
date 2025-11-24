const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post(
    '/register',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, email, password, institution, role } = req.body;

        try {
            // Check if user exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists',
                });
            }

            // Create user
            user = await User.create({
                name,
                email,
                password,
                institution,
                role: role || 'member',
            });

            // Create token
            const token = generateToken(user._id);

            res.status(201).json({
                success: true,
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').exists().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check for user
            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials',
                });
            }

            // Check if password matches
            const isMatch = await user.matchPassword(password);

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials',
                });
            }

            // Create token
            const token = generateToken(user._id);

            res.json({
                success: true,
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
);

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .populate('projects')
            .populate('eventsRegistered');

        res.json({
            success: true,
            data: user,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, async (req, res) => {
    const { name, institution, phone, bio, interests, skills } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name, institution, phone, bio, interests, skills },
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: user,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
