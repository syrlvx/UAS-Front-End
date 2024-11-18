const app = angular.module('loginApp', []);

app.controller('LoginController', ['$scope', function ($scope) {
  $scope.user = {};
  $scope.emailError = false; 
  $scope.passwordError = false; 

  $scope.submitForm = function () {
    // Reset error messages
    $scope.emailError = false;
    $scope.passwordError = false;

    // Validasi email
    if (!$scope.user.email || !$scope.user.email.endsWith('@gmail.com')) {
      $scope.emailError = true;
    }

    // Validasi password
    if (!$scope.user.password || $scope.user.password.trim().length < 6) {
      $scope.passwordError = true;
    }

    // Jika validasi gagal, jangan submit form
    if ($scope.emailError || $scope.passwordError) {
      return;
    }

    // Jika semua validasi lolos
    alert('Login successful for: ' + $scope.user.email);
    $scope.user.email = '';
    $scope.user.password = '';
    $scope.loginForm.$setPristine();
    $scope.loginForm.$setUntouched();
  };
}]);
