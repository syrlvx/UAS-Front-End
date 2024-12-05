// models/Notebook.js
const mongoose = require('mongoose');

// Define the notebook schema
const notebookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // The title is required
    },
    content: {
        type: String,
        required: true, // The content is required
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the current date/time when created
    },
});

// Create the model using the schema
const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;
