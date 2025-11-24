const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a project name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['ideation', 'development', 'testing', 'completed', 'on-hold'],
        default: 'ideation',
    },
    teamLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    teamMembers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        role: String,
    }],
    innovationCenter: {
        type: String,
    },
    targetBeneficiaries: {
        type: String,
    },
    milestones: [{
        title: String,
        description: String,
        dueDate: Date,
        completed: {
            type: Boolean,
            default: false,
        },
    }],
    images: [{
        type: String,
    }],
    documents: [{
        name: String,
        url: String,
    }],
    fundingRequired: {
        type: Number,
    },
    fundingReceived: {
        type: Number,
        default: 0,
    },
    tags: [{
        type: String,
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);
