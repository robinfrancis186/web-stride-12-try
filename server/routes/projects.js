const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { status, category } = req.query;

        let query = {};

        if (status) {
            query.status = status;
        }

        if (category) {
            query.category = category;
        }

        const projects = await Project.find(query)
            .populate('teamLead', 'name email')
            .populate('teamMembers.user', 'name email')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: projects.length,
            data: projects,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
            .populate('teamLead', 'name email institution')
            .populate('teamMembers.user', 'name email institution');

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }

        res.json({
            success: true,
            data: project,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/projects
// @desc    Create project
// @access  Private
router.post('/', protect, async (req, res) => {
    try {
        const projectData = {
            ...req.body,
            teamLead: req.user.id,
        };

        const project = await Project.create(projectData);

        // Add project to user's projects
        await User.findByIdAndUpdate(req.user.id, {
            $push: { projects: project._id },
        });

        res.status(201).json({
            success: true,
            data: project,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   PUT /api/projects/:id
// @desc    Update project
// @access  Private
router.put('/:id', protect, async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }

        // Check if user is team lead
        if (project.teamLead.toString() !== req.user.id && req.user.role !== 'central_admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this project',
            });
        }

        project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: project,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// @route   POST /api/projects/:id/join
// @desc    Join project team
// @access  Private
router.post('/:id/join', protect, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }

        // Check if already a member
        const isMember = project.teamMembers.some(
            member => member.user.toString() === req.user.id
        );

        if (isMember || project.teamLead.toString() === req.user.id) {
            return res.status(400).json({
                success: false,
                message: 'Already part of this project',
            });
        }

        // Add user to team
        project.teamMembers.push({
            user: req.user.id,
            role: req.body.role || 'Member',
        });

        await project.save();

        // Add project to user's projects
        await User.findByIdAndUpdate(req.user.id, {
            $push: { projects: project._id },
        });

        res.json({
            success: true,
            message: 'Successfully joined project',
            data: project,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
