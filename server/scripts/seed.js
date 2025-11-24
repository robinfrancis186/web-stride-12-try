const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const Event = require('../models/Event');
const News = require('../models/News');
const User = require('../models/User');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const products = [
    {
        name: 'Smart Cane V2',
        description: 'Ultrasonic obstacle detection with haptic feedback for enhanced mobility.',
        price: 2500,
        category: 'Mobility',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        tag: 'Best Seller',
        stock: 50,
        features: ['Ultrasonic sensors', 'Haptic feedback', 'Rechargeable battery', 'Water resistant'],
        rating: 4.8,
        numReviews: 127,
    },
    {
        name: 'Braille Keyboard',
        description: 'Refreshable braille display with Bluetooth connectivity for seamless typing.',
        price: 4500,
        category: 'Computing',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
        tag: 'Pro',
        stock: 30,
        features: ['40-cell display', 'Bluetooth 5.0', 'USB-C charging', 'Multi-device support'],
        rating: 4.6,
        numReviews: 89,
    },
    {
        name: 'Lightweight Ramp',
        description: 'Portable, carbon-fiber folding ramp for wheelchairs and mobility aids.',
        price: 8000,
        category: 'Accessibility',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
        tag: 'New',
        stock: 20,
        features: ['Carbon fiber construction', 'Foldable design', '300kg capacity', 'Non-slip surface'],
        rating: 4.9,
        numReviews: 56,
    },
];

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Product.deleteMany();
        await Event.deleteMany();
        await News.deleteMany();

        console.log('Data cleared');

        // Insert products
        await Product.insertMany(products);
        console.log('Products seeded');

        // Create admin user
        const adminExists = await User.findOne({ email: 'admin@stride.com' });
        if (!adminExists) {
            await User.create({
                name: 'STRIDE Admin',
                email: 'admin@stride.com',
                password: 'admin123',
                role: 'central_admin',
                institution: 'STRIDE Central',
            });
            console.log('Admin user created (email: admin@stride.com, password: admin123)');
        }

        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
