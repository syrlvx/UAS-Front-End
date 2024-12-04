// AngularJS App Initialization
const app = angular.module('kalkulatorApp', []);

app.controller('kalkulatorController', function ($scope) {
    // BMI Calculator
    $scope.bmi = {
        height: null,
        weight: null,
        result: ''
    };

    $scope.calculateBMI = function () {
        const height = $scope.bmi.height / 100;
        const weight = $scope.bmi.weight;
        const bmi = (weight / (height * height)).toFixed(2);
        if (bmi < 18.5) {
            $scope.bmi.result = `Your BMI is ${bmi} (Underweight)`;
        } else if (bmi < 24.9) {
            $scope.bmi.result = `Your BMI is ${bmi} (Normal weight)`;
        } else if (bmi < 29.9) {
            $scope.bmi.result = `Your BMI is ${bmi} (Overweight)`;
        } else {
            $scope.bmi.result = `Your BMI is ${bmi} (Obesity)`;
        }
    };

    // Calorie Burn Estimator
    $scope.activities = [
        { name: 'Walking', value: 4 },
        { name: 'Running', value: 8 },
        { name: 'Cycling', value: 6 }
    ];

    $scope.calories = {
        activity: null,
        duration: null,
        result: ''
    };

    $scope.estimateCalories = function () {
        const burned = ($scope.calories.activity * $scope.calories.duration).toFixed(2);
        $scope.calories.result = `You burned approximately ${burned} calories.`;
    };

    // Macro Tracker
    $scope.macros = {
        protein: null,
        carbs: null,
        fats: null,
        result: ''
    };

    $scope.trackMacros = function () {
        const totalCalories =
            ($scope.macros.protein * 4) +
            ($scope.macros.carbs * 4) +
            ($scope.macros.fats * 9);
        $scope.macros.result = `You consumed ${totalCalories} calories today (Protein: ${$scope.macros.protein}g, Carbs: ${$scope.macros.carbs}g, Fats: ${$scope.macros.fats}g).`;
    };
});