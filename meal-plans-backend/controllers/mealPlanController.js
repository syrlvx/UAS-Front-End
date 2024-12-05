const MealPlan = require('../models/MealPlan');
const { isValidObjectId } = require('mongoose');

exports.createMealPlan = async (req, res) => {
    try {
        const mealPlan = new MealPlan(req.body);
        await mealPlan.save();
        res.status(201).json(mealPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMealPlansByDate = async (req, res) => {
    try {
        const mealPlans = await MealPlan.find({ date: req.params.date });
        res.json(mealPlans);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMealPlan = async (req, res) => {
    try {
        console.log("ID from URL:", req.params.id);
        console.log("Body received:", req.body);

        const updatedMealPlan = await MealPlan.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedMealPlan) {
            return res.status(404).json({ message: "Meal Plan not found" });
        }

        res.status(200).json(updatedMealPlan);
    } catch (err) {
        console.error("Update error:", err);
        res.status(400).json({ error: err.message });
    }
};
exports.updateMealPlan = async (req, res) => {
    try {
        console.log("ID from URL:", req.params.id);
        console.log("Body received:", req.body);

        const updatedMealPlan = await MealPlan.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedMealPlan) {
            return res.status(404).json({ message: "Meal Plan not found" });
        }

        res.status(200).json(updatedMealPlan);
    } catch (err) {
        console.error("Update error:", err);
        res.status(400).json({ error: err.message });
    }
};


exports.deleteMealPlan = async (req, res) => {
    try {
        await MealPlan.findByIdAndDelete(req.params.id);
        res.json({ message: 'Meal plan deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
