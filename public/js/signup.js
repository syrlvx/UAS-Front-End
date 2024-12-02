const app = angular.module('loginApp', []);

app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {
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
