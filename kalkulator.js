// AngularJS Application
angular.module('HealthyLifestyleApp', [])
  .controller('CalculatorController', function($scope) {
    $scope.weight = null;
    $scope.height = null;
    $scope.age = null;
    $scope.gender = null;
    $scope.activityLevel = "1.2";
    $scope.calories = null;

    $scope.calculateCalories = function() {
      if ($scope.weight && $scope.height && $scope.age && $scope.gender) {
        // Menghitung BMR (Basal Metabolic Rate)
        let bmr;
        if ($scope.gender === "male") {
          bmr = 88.36 + (13.4 * $scope.weight) + (4.8 * $scope.height) - (5.7 * $scope.age);
        } else {
          bmr = 447.6 + (9.2 * $scope.weight) + (3.1 * $scope.height) - (4.3 * $scope.age);
        }
        // Menghitung kebutuhan kalori harian
        $scope.calories = bmr * parseFloat($scope.activityLevel);
      } else {
        alert("Harap isi semua data!");
      }
    };
  });
