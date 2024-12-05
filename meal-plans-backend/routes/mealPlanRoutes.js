const express = require('express');
const router = express.Router();
const {
    createMealPlan,
    getMealPlansByDate,
    updateMealPlan,
    deleteMealPlan
} = require('../controllers/mealPlanController');

router.post('/', createMealPlan);
router.get('/:date', getMealPlansByDate);
router.put('/:id', updateMealPlan);
router.delete('/:id', deleteMealPlan);

module.exports = router;
