const mongoose = require('mongoose');

// Definisikan schema untuk artikel atau konten
const articleSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    subjudul: {
        type: String,
        required: true,
    },
    paragraf1: {
        type: String,
        required: true,
    },
    paragraf2: {
        type: String,
        required: true,
    },
    paragraf3: {
        type: String,
        required: true,
    },
    image1: {
        type: String,
        required: true, 
    },
    image2: {
        type: String,
        required: true, 
    },
    image3: {
        type: String,
        required: true, 
    }
});


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
