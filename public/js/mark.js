const app = angular.module('MealPlansApp', []);

app.controller('MealPlansController', function ($scope) {
    // Data penyimpanan meal plan
    $scope.mealPlans = [];
    $scope.mealPlan = {
        id: null,
        date: '',
        breakfast: '',
        lunch: '',
        dinner: '',
        snacks: '',
        totalCalories: 0
    };

    // Data kalori berdasarkan makanan
    const foodCaloriesData = {
        "Nasi Goreng": 300,
        "Sate Ayam": 250,
        "Ayam Bakar": 350,
        "Coklat": 200,
        "Mie Goreng": 400,
        "Salad": 150,
        "Burger": 500,
        "Sup Ayam": 250
    };

    // Fungsi untuk menghitung total kalori
    $scope.calculateTotalCalories = function () {
        let breakfastCalories = foodCaloriesData[$scope.mealPlan.breakfast] || 0;
        let lunchCalories = foodCaloriesData[$scope.mealPlan.lunch] || 0;
        let dinnerCalories = foodCaloriesData[$scope.mealPlan.dinner] || 0;
        let snacksCalories = foodCaloriesData[$scope.mealPlan.snacks] || 0;

        // Hitung total kalori
        $scope.mealPlan.totalCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    };

    // Simpan atau perbarui meal plan
    $scope.saveMealPlan = function () {
        if ($scope.mealPlan.id === null) {
            // Untuk meal plan baru, berikan id unik
            $scope.mealPlan.id = Date.now();
            $scope.mealPlans.push({ ...$scope.mealPlan });
        } else {
            // Update meal plan yang ada
            const index = $scope.mealPlans.findIndex((plan) => plan.id === $scope.mealPlan.id);
            if (index !== -1) {
                $scope.mealPlans[index] = { ...$scope.mealPlan };
            }
        }

        // Reset form setelah disimpan
        $scope.mealPlan = {
            id: null,
            date: '',
            breakfast: '',
            lunch: '',
            dinner: '',
            snacks: '',
            totalCalories: 0
        };
    };

    // Edit meal plan
    $scope.editMealPlan = function (plan) {
        $scope.mealPlan = { ...plan };
    };

    // Hapus meal plan
    $scope.deleteMealPlan = function (plan) {
        const index = $scope.mealPlans.indexOf(plan);
        if (index !== -1) {
            $scope.mealPlans.splice(index, 1);
        }
    };
});
