const app = angular.module('signupApp', []);
app.controller('SignupController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.user = {}; // Data user untuk form
    $scope.errorMessage = ''; // Pesan error dari backend

    // Fungsi untuk submit form
    $scope.submitForm = function () {
        console.log($scope.user);  // Debug data yang dikirim
        $http.post('/signup', $scope.user)
            .then(function (response) {
                if (response.data.success) {
                    alert('Pendaftaran berhasil!');
                    $scope.user = {}; // Reset form jika berhasil

                    // Redirect ke halaman login setelah pendaftaran berhasil
                    $window.location.href = '/login';  // Mengarahkan ke halaman login
                }
            })
            .catch(function (error) {
                // Tangkap error dari backend
                if (error.data && error.data.error) {
                    $scope.errorMessage = error.data.error;
                } else {
                    $scope.errorMessage = 'Terjadi kesalahan pada server.';
                }

                // Tampilkan modal dengan pesan error
                const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
                errorModal.show();
            });
    };
}]);