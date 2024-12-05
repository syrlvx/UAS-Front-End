const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    namaMakanan: { type: String, required: true },
    kalori: { type: Number, required: true },
    protein: { type: Number, required: true },
    karbohidrat: { type: Number, required: true },
    lemak: { type: Number, required: true },
    gambar: { type: String, required: true },
    resep: { type: String, required: true },
    bahan: { type: [String], required: true }  // Array of ingredients
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
