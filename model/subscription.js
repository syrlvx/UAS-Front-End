const mongoose = require('mongoose');

// Definisikan schema untuk Subscription
const subscriptionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

// Membuat model berdasarkan schema
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;