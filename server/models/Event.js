const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add an event title'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    type: {
        type: String,
        required: true,
        enum: ['workshop', 'designathon', 'webinar', 'conference', 'meetup'],
    },
    date: {
        type: Date,
        required: [true, 'Please add an event date'],
    },
    endDate: {
        type: Date,
    },
    location: {
        type: String,
        required: [true, 'Please add a location'],
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    meetingLink: {
        type: String,
    },
    capacity: {
        type: Number,
        required: true,
    },
    registeredUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    image: {
        type: String,
    },
    organizer: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    requirements: [{
        type: String,
    }],
    agenda: [{
        time: String,
        activity: String,
    }],
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
        default: 'upcoming',
    },
    registrationDeadline: {
        type: Date,
    },
}, {
    timestamps: true,
});

// Virtual for available spots
eventSchema.virtual('availableSpots').get(function () {
    return this.capacity - this.registeredUsers.length;
});

module.exports = mongoose.model('Event', eventSchema);
