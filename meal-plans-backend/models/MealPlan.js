const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    meals: [
        {
            type: {
                mealType: { type: String, required: true },
                items: { type: [String], required: true }
            },
        },
    ],
    total_calories: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('MealPlan', MealPlanSchema);
