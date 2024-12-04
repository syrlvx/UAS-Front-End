angular.module('pencarianApp', [])
.controller('PencarianController', function($scope) {
    $scope.makananList = [
        { 
            namaMakanan: "Apel", 
            kalori: 52, 
            protein: 0.3, 
            karbohidrat: 14, 
            lemak: 0.2, 
            gambar: "https://via.placeholder.com/80?text=Apel", 
            resep: "Cuci apel, potong menjadi beberapa bagian, dan sajikan sebagai camilan sehat." 
        },
        { 
            namaMakanan: "Nasi Putih", 
            kalori: 130, 
            protein: 2.7, 
            karbohidrat: 28, 
            lemak: 0.3, 
            gambar: "https://via.placeholder.com/80?text=Nasi+Putih", 
            resep: "Cuci beras, masak dalam rice cooker dengan perbandingan air yang sesuai." 
        },
        { 
            namaMakanan: "Ayam Panggang", 
            kalori: 165, 
            protein: 31, 
            karbohidrat: 0, 
            lemak: 3.6, 
            gambar: "https://via.placeholder.com/80?text=Ayam+Panggang", 
            resep: "Bumbui ayam dengan garam dan lada, lalu panggang di oven selama 30 menit." 
        }
    ];
    $scope.hasilPencarian = [];

    $scope.tampilkanModalResep = false;
    $scope.resepDipilih = {};

    $scope.cariMakanan = function() {
        const query = $scope.makanan ? $scope.makanan.toLowerCase() : '';
        $scope.hasilPencarian = $scope.makananList.filter(item =>
            item.namaMakanan.toLowerCase().includes(query)
        );
    };

    $scope.tampilkanResep = function(item) {
        $scope.resepDipilih = item;
        $scope.tampilkanModalResep = true;
    };

    $scope.tutupModalResep = function() {
        $scope.tampilkanModalResep = false;
        $scope.resepDipilih = {};
    };
});
