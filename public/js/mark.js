const app = angular.module('gayaHidupApp', []);

app.controller('GayaHidupController', ['$scope', function ($scope) {
  // Daftar kegiatan gaya hidup sehat
  $scope.daftarKegiatan = [
    { nama: 'Berolahraga 30 menit', deskripsi: 'Lakukan olahraga ringan seperti jogging atau yoga.', selesai: false },
    { nama: 'Minum 2 liter air', deskripsi: 'Pastikan tubuh tetap terhidrasi sepanjang hari.', selesai: false },
    { nama: 'Makan sayur dan buah', deskripsi: 'Konsumsi minimal satu porsi sayuran dan buah segar.', selesai: false },
    { nama: 'Tidur cukup', deskripsi: 'Tidur selama 7-8 jam untuk memulihkan energi.', selesai: false },
    { nama: 'Meditasi 10 menit', deskripsi: 'Luangkan waktu untuk relaksasi dan mindfulness.', selesai: false },
  ];

  // Fungsi untuk mengubah status kegiatan selesai atau belum
  $scope.toggleStatus = function (index) {
    $scope.daftarKegiatan[index].selesai = !$scope.daftarKegiatan[index].selesai;
  };
}]);
