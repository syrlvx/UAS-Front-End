angular.module('loginApp', [])
    .controller('LoginController', ['$scope', '$http', function ($scope, $http) {

        // Model untuk user input
        $scope.user = {};

        // Menyimpan error form
        $scope.emailError = false;
        $scope.passwordError = false;

        // Fungsi untuk submit form
        $scope.submitForm = function () {
            // Validasi form
            $scope.emailError = !$scope.user.email || !/\S+@\S+\.\S+/.test($scope.user.email);
            $scope.passwordError = !$scope.user.password || $scope.user.password.length < 6;

            if (!$scope.emailError && !$scope.passwordError) {
                // Kirim data ke backend untuk login
                $http.post('/login', $scope.user)
                    .then(function (response) {
                        // Tangani response dari server
                        console.log(response.data);
                        if (response.data.success) {
                            // Redirect berdasarkan role
                            window.location.href = response.data.redirectTo;
                        } else {
                            // Tampilkan error jika login gagal
                            alert('Login gagal: ' + response.data.error);
                        }
                    })
                    .catch(function (error) {
                        // Tangani error dari server
                        if (error.data && error.data.error) {
                            alert('Error: ' + error.data.error);
                        } else {
                            alert('Terjadi kesalahan saat login');
                        }
                        console.error(error);
                    });
            }
        };
    }]);
