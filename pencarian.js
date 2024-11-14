angular.module('nutritionApp', [])
.controller('NutritionController', function($scope) {
    // Data makanan dan kandungan kalori serta makronutrien
    $scope.makananList = [
        { namaMakanan: "Apel", kalori: 52, protein: 0.3, karbohidrat: 14, lemak: 0.2 },
        { namaMakanan: "Nasi Putih", kalori: 130, protein: 2.7, karbohidrat: 28, lemak: 0.3 },
        { namaMakanan: "Ayam Panggang", kalori: 165, protein: 31, karbohidrat: 0, lemak: 3.6 },
        { namaMakanan: "Telur Rebus", kalori: 77, protein: 6.3, karbohidrat: 0.6, lemak: 5.3 },
        { namaMakanan: "Alpukat", kalori: 160, protein: 2, karbohidrat: 9, lemak: 15 },
        { namaMakanan: "Roti Gandum", kalori: 69, protein: 3.6, karbohidrat: 12, lemak: 1.2 },
        { namaMakanan: "Yogurt Greek", kalori: 59, protein: 10, karbohidrat: 3.6, lemak: 0.4 }
    ];

    // Inisialisasi hasil pencarian
    $scope.hasilPencarian = [];

    // Fungsi untuk mencari makanan berdasarkan input pengguna
    $scope.cariMakanan = function() {
        const query = $scope.makanan ? $scope.makanan.toLowerCase() : '';
        $scope.hasilPencarian = $scope.makananList.filter(item =>
            item.namaMakanan.toLowerCase().includes(query)
        );
    };
});
