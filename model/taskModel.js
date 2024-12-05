const mongoose = require('mongoose');

// Define the schema for Task
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    }
});

// Create and export the Task model
module.exports = mongoose.model('Task', taskSchema);
