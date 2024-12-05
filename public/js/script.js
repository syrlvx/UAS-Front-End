var app = angular.module('indexApp', []);

app.controller('IndexController', function($scope) {
    $scope.answers = {
        question1: 1,
        question2: 1,
        question3: 1
    };

    $scope.result = null;

    // Function to calculate the result based on user input
    $scope.submitTest = function() {
        var totalScore = $scope.answers.question1 + $scope.answers.question2 + $scope.answers.question3;

        if (totalScore <= 6) {
            $scope.result = "Your health status needs improvement. Try to exercise more and eat a balanced diet.";
        } else if (totalScore <= 9) {
            $scope.result = "You're doing well, but there's room for improvement in your lifestyle.";
        } else {
            $scope.result = "Great job! Keep up the good work with your healthy lifestyle!";
        }

        // Close the modal after submission
        $('#healthTestModal').modal('hide');
    };
});
