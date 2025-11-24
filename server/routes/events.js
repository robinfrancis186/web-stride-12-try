const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { type, status, upcoming } = req.query;

        let query = {};

        if (type) {
            query.type = type;
        }

        if (status) {
            query.status = status;
        }

        if (upcoming) {
            query.date = { $gte: new Date() };
            query.status = 'upcoming';
        }

        const events = await Event.find(query).sort({ date: 1 });

        res.json({
            success: true,
            count: events.length,
            data: events,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/events/:id
// @desc    Get single event
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('registeredUsers', 'name email institution');

        if (!event) {
            return res.status(404).json({
                success: false,
                message: 'Event not found',
            });
        }

        res.json({
            success: true,
            data: event,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/events/:id/register
// @desc    Register for event
// @access  Private
router.post('/:id/register', protect, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: 'Event not found',
            });
        }

        // Check if already registered
        if (event.registeredUsers.includes(req.user.id)) {
            return res.status(400).json({
                success: false,
                message: 'Already registered for this event',
            });
        }

        // Check capacity
        if (event.registeredUsers.length >= event.capacity) {
            return res.status(400).json({
                success: false,
                message: 'Event is full',
            });
        }

        // Check registration deadline
        if (event.registrationDeadline && new Date() > event.registrationDeadline) {
            return res.status(400).json({
                success: false,
                message: 'Registration deadline has passed',
            });
        }

        // Register user
        event.registeredUsers.push(req.user.id);
        await event.save();

        // Update user's events
        await User.findByIdAndUpdate(req.user.id, {
            $push: { eventsRegistered: event._id },
        });

        res.json({
            success: true,
            message: 'Successfully registered for event',
            data: event,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/events
// @desc    Create event
// @access  Private/Admin
router.post('/', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const event = await Event.create(req.body);

        res.status(201).json({
            success: true,
            data: event,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/events/:id
// @desc    Update event
// @access  Private/Admin
router.put('/:id', protect, authorize('central_admin', 'campus_admin'), async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!event) {
            return res.status(404).json({
                success: false,
                message: 'Event not found',
            });
        }

        res.json({
            success: true,
            data: event,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
