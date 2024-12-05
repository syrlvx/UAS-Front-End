const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const chatSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    messages: [messageSchema],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;