const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', async (req, res) => {
    try {
        const { email, preferences } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }

        // Check if already subscribed
        let subscriber = await Subscriber.findOne({ email });

        if (subscriber) {
            if (subscriber.isActive) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already subscribed',
                });
            } else {
                // Reactivate subscription
                subscriber.isActive = true;
                if (preferences) {
                    subscriber.preferences = preferences;
                }
                await subscriber.save();

                return res.json({
                    success: true,
                    message: 'Subscription reactivated',
                    data: subscriber,
                });
            }
        }

        // Create new subscriber
        subscriber = await Subscriber.create({
            email,
            preferences: preferences || {},
        });

        res.status(201).json({
            success: true,
            message: 'Successfully subscribed to newsletter',
            data: subscriber,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/newsletter/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.post('/unsubscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }

        const subscriber = await Subscriber.findOne({ email });

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: 'Email not found',
            });
        }

        subscriber.isActive = false;
        await subscriber.save();

        res.json({
            success: true,
            message: 'Successfully unsubscribed from newsletter',
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/newsletter/preferences
// @desc    Update newsletter preferences
// @access  Public
router.put('/preferences', async (req, res) => {
    try {
        const { email, preferences } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }

        const subscriber = await Subscriber.findOneAndUpdate(
            { email },
            { preferences },
            { new: true, runValidators: true }
        );

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: 'Subscriber not found',
            });
        }

        res.json({
            success: true,
            message: 'Preferences updated',
            data: subscriber,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
