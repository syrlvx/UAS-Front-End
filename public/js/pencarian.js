angular.module('pencarianApp', [])
.controller('PencarianController', function($scope) {
    $scope.makananList = [
        {
            namaMakanan: "Nasi Goreng",
            kalori: 200,
            protein: 4,
            karbohidrat: 25,
            lemak: 6,
            gambar: "https://images.tokopedia.net/img/JFrBQq/2024/6/25/984fc5ad-0165-43d3-b4ce-fbbd9f2afa00.jpg",
            resep: "Tumis bawang putih, tambahkan nasi, kecap, dan bumbu lainnya, lalu masak hingga matang."
        },
        {
            namaMakanan: "Ayam Goreng",
            kalori: 250,
            protein: 20,
            karbohidrat: 5,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Ayam+Goreng",
            resep: "Rendam ayam dengan bumbu, lalu goreng hingga kecoklatan."
        },
        {
            namaMakanan: "Sate Ayam",
            kalori: 230,
            protein: 22,
            karbohidrat: 8,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Sate+Ayam",
            resep: "Tusuk potongan ayam, bakar dengan bumbu kecap atau kacang hingga matang."
        },
        {
            namaMakanan: "Mie Goreng",
            kalori: 320,
            protein: 8,
            karbohidrat: 40,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Mie+Goreng",
            resep: "Rebus mie, tumis dengan sayuran dan bumbu, lalu goreng hingga matang."
        },
        {
            namaMakanan: "Rendang",
            kalori: 350,
            protein: 16,
            karbohidrat: 5,
            lemak: 25,
            gambar: "https://via.placeholder.com/80?text=Rendang",
            resep: "Masak daging sapi dengan santan dan bumbu khas hingga kering."
        },
        {
            namaMakanan: "Tahu Goreng",
            kalori: 80,
            protein: 8,
            karbohidrat: 2,
            lemak: 4,
            gambar: "https://via.placeholder.com/80?text=Tahu+Goreng",
            resep: "Potong tahu, goreng hingga kecoklatan, dan sajikan."
        },
        {
            namaMakanan: "Tempe Goreng",
            kalori: 150,
            protein: 12,
            karbohidrat: 10,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Tempe+Goreng",
            resep: "Potong tempe, goreng hingga kecoklatan, dan sajikan."
        },
        {
            namaMakanan: "Soto Ayam",
            kalori: 150,
            protein: 15,
            karbohidrat: 8,
            lemak: 6,
            gambar: "https://via.placeholder.com/80?text=Soto+Ayam",
            resep: "Rebus ayam dengan bumbu kuning, tambahkan bihun, dan sajikan."
        },
        {
            namaMakanan: "Gado-Gado",
            kalori: 180,
            protein: 9,
            karbohidrat: 12,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Gado-Gado",
            resep: "Campur sayuran rebus, tahu, dan tempe dengan bumbu kacang."
        },
        {
            namaMakanan: "Bakso",
            kalori: 220,
            protein: 12,
            karbohidrat: 20,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Bakso",
            resep: "Rebus bakso dengan kuah kaldu, tambahkan mie dan sayuran."
        },
        {
            namaMakanan: "Pecel Lele",
            kalori: 260,
            protein: 18,
            karbohidrat: 8,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Pecel+Lele",
            resep: "Goreng lele hingga matang, sajikan dengan sambal dan lalapan."
        },
        {
            namaMakanan: "Gudeg",
            kalori: 300,
            protein: 10,
            karbohidrat: 40,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Gudeg",
            resep: "Masak nangka muda dengan santan dan bumbu khas hingga matang."
        },
        {
            namaMakanan: "Rawon",
            kalori: 250,
            protein: 15,
            karbohidrat: 10,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Rawon",
            resep: "Masak daging sapi dengan bumbu kluwak hingga matang."
        },
        {
            namaMakanan: "Capcay",
            kalori: 180,
            protein: 9,
            karbohidrat: 15,
            lemak: 6,
            gambar: "https://via.placeholder.com/80?text=Capcay",
            resep: "Tumis berbagai sayuran dengan sedikit saus tiram."
        },
        {
            namaMakanan: "Ayam Bakar",
            kalori: 220,
            protein: 20,
            karbohidrat: 8,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Ayam+Bakar",
            resep: "Bakar ayam dengan bumbu kecap hingga matang."
        },{
            namaMakanan: "Risotto",
            kalori: 330,
            protein: 8,
            karbohidrat: 45,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Risotto",
            resep: "Masak nasi Arborio dengan kaldu ayam, keju Parmesan, dan bawang putih."
        },
        {
            namaMakanan: "Paella",
            kalori: 400,
            protein: 15,
            karbohidrat: 55,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Paella",
            resep: "Masak nasi dengan saffron, seafood, ayam, dan sayuran."
        },
        {
            namaMakanan: "Shakshuka",
            kalori: 200,
            protein: 10,
            karbohidrat: 15,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Shakshuka",
            resep: "Masak telur dalam saus tomat pedas dengan paprika dan bawang."
        },
        {
            namaMakanan: "Ratatouille",
            kalori: 150,
            protein: 5,
            karbohidrat: 20,
            lemak: 6,
            gambar: "https://via.placeholder.com/80?text=Ratatouille",
            resep: "Rebus sayuran seperti terong, zucchini, dan paprika dengan bumbu rempah."
        },
        {
            namaMakanan: "Lasagna",
            kalori: 450,
            protein: 25,
            karbohidrat: 40,
            lemak: 18,
            gambar: "https://via.placeholder.com/80?text=Lasagna",
            resep: "Susun pasta lasagna, saus daging, dan keju, lalu panggang."
        },
        {
            namaMakanan: "Pad Thai",
            kalori: 350,
            protein: 18,
            karbohidrat: 45,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Pad+Thai",
            resep: "Tumis mie beras dengan udang, telur, tauge, dan saus tamarind."
        },
        {
            namaMakanan: "Bibimbap",
            kalori: 500,
            protein: 20,
            karbohidrat: 50,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Bibimbap",
            resep: "Sajikan nasi dengan sayuran, telur, daging, dan saus gochujang."
        },
        {
            namaMakanan: "Chicken Kiev",
            kalori: 420,
            protein: 30,
            karbohidrat: 20,
            lemak: 25,
            gambar: "https://via.placeholder.com/80?text=Chicken+Kiev",
            resep: "Isi dada ayam dengan mentega bawang putih, goreng hingga renyah."
        },
        {
            namaMakanan: "Beef Stroganoff",
            kalori: 350,
            protein: 20,
            karbohidrat: 30,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Beef+Stroganoff",
            resep: "Masak daging sapi dengan saus krim, jamur, dan bawang."
        },
        {
            namaMakanan: "Moussaka",
            kalori: 370,
            protein: 15,
            karbohidrat: 25,
            lemak: 20,
            gambar: "https://via.placeholder.com/80?text=Moussaka",
            resep: "Susun lapisan terong, daging cincang, dan saus béchamel, lalu panggang."
        },
        {
            namaMakanan: "Chicken Tikka Masala",
            kalori: 300,
            protein: 25,
            karbohidrat: 10,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Chicken+Tikka+Masala",
            resep: "Masak ayam dalam saus tomat kental dengan rempah khas India."
        },
        {
            namaMakanan: "Fish and Chips",
            kalori: 600,
            protein: 20,
            karbohidrat: 70,
            lemak: 25,
            gambar: "https://via.placeholder.com/80?text=Fish+and+Chips",
            resep: "Goreng ikan berbalut tepung, sajikan dengan kentang goreng."
        },
        {
            namaMakanan: "Falafel",
            kalori: 280,
            protein: 10,
            karbohidrat: 25,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Falafel",
            resep: "Goreng bola-bola kacang buncis dengan rempah."
        },
        {
            namaMakanan: "Tacos",
            kalori: 300,
            protein: 15,
            karbohidrat: 25,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Tacos",
            resep: "Isi tortilla dengan daging, sayuran, dan saus pilihan."
        },
        {
            namaMakanan: "Jambalaya",
            kalori: 450,
            protein: 18,
            karbohidrat: 50,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Jambalaya",
            resep: "Masak nasi dengan udang, sosis, dan rempah khas Louisiana."
        },
        {
            namaMakanan: "Martabak Telur",
            kalori: 280,
            protein: 12,
            karbohidrat: 24,
            lemak: 16,
            gambar: "https://via.placeholder.com/80?text=Martabak+Telur",
            resep: "Campur telur, daging cincang, dan bumbu, goreng dengan kulit lumpia."
        },
        {
            namaMakanan: "Ketoprak",
            kalori: 220,
            protein: 9,
            karbohidrat: 30,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Ketoprak",
            resep: "Campur bihun, tahu, dan lontong dengan bumbu kacang."
        },
        {
            namaMakanan: "Ayam Penyet",
            kalori: 250,
            protein: 20,
            karbohidrat: 5,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Ayam+Penyet",
            resep: "Goreng ayam hingga matang, penyet dengan sambal terasi."
        },
        {
            namaMakanan: "Lontong Sayur",
            kalori: 280,
            protein: 8,
            karbohidrat: 35,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Lontong+Sayur",
            resep: "Sajikan lontong dengan sayur labu dan kuah santan."
        },
        {
            namaMakanan: "Karedok",
            kalori: 180,
            protein: 8,
            karbohidrat: 10,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Karedok",
            resep: "Campur sayuran mentah dengan bumbu kacang khas Sunda."
        },
        {
            namaMakanan: "Nasi Liwet",
            kalori: 310,
            protein: 12,
            karbohidrat: 40,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Nasi+Liwet",
            resep: "Masak nasi dengan santan, ikan asin, dan bumbu rempah."
        },
        {
            namaMakanan: "Pempek",
            kalori: 220,
            protein: 10,
            karbohidrat: 20,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Pempek",
            resep: "Campur ikan dan tepung, bentuk bulat, goreng, sajikan dengan kuah cuko."
        },
        {
            namaMakanan: "Ikan Bakar",
            kalori: 200,
            protein: 25,
            karbohidrat: 2,
            lemak: 8,
            gambar: "https://via.placeholder.com/80?text=Ikan+Bakar",
            resep: "Bakar ikan dengan bumbu kecap dan rempah hingga matang."
        },
        {
            namaMakanan: "Sayur Asem",
            kalori: 100,
            protein: 5,
            karbohidrat: 10,
            lemak: 3,
            gambar: "https://via.placeholder.com/80?text=Sayur+Asem",
            resep: "Rebus sayuran dengan bumbu asam jawa dan gula merah."
        },
        {
            namaMakanan: "Gudeg Manggar",
            kalori: 280,
            protein: 10,
            karbohidrat: 35,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Gudeg+Manggar",
            resep: "Masak manggar kelapa muda dengan santan dan bumbu khas."
        },
        {
            namaMakanan: "Nasi Uduk",
            kalori: 300,
            protein: 8,
            karbohidrat: 40,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Nasi+Uduk",
            resep: "Masak nasi dengan santan dan bumbu seperti daun salam."
        },
        {
            namaMakanan: "Ayam Rica-Rica",
            kalori: 240,
            protein: 20,
            karbohidrat: 6,
            lemak: 12,
            gambar: "https://via.placeholder.com/80?text=Ayam+Rica-Rica",
            resep: "Tumis ayam dengan cabai merah dan bumbu rica khas Manado."
        },
        {
            namaMakanan: "Sate Kambing",
            kalori: 270,
            protein: 22,
            karbohidrat: 5,
            lemak: 18,
            gambar: "https://via.placeholder.com/80?text=Sate+Kambing",
            resep: "Tusuk daging kambing, bakar dengan kecap manis dan bumbu."
        },
        {
            namaMakanan: "Bubur Ayam",
            kalori: 150,
            protein: 10,
            karbohidrat: 20,
            lemak: 5,
            gambar: "https://via.placeholder.com/80?text=Bubur+Ayam",
            resep: "Masak bubur nasi, tambahkan suwiran ayam dan kerupuk."
        },
        {
            namaMakanan: "Opor Ayam",
            kalori: 250,
            protein: 18,
            karbohidrat: 10,
            lemak: 15,
            gambar: "https://via.placeholder.com/80?text=Opor+Ayam",
            resep: "Masak ayam dengan santan dan bumbu khas opor hingga matang."
        },
        {
            namaMakanan: "Bakmi Jawa",
            kalori: 320,
            protein: 12,
            karbohidrat: 40,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Bakmi+Jawa",
            resep: "Tumis mie dengan telur dan ayam, masak hingga matang."
        },
        {
            namaMakanan: "Sop Buntut",
            kalori: 300,
            protein: 25,
            karbohidrat: 8,
            lemak: 18,
            gambar: "https://via.placeholder.com/80?text=Sop+Buntut",
            resep: "Rebus buntut sapi dengan bumbu rempah hingga empuk."
        },
        {
            namaMakanan: "Nasi Padang",
            kalori: 350,
            protein: 15,
            karbohidrat: 40,
            lemak: 18,
            gambar: "https://via.placeholder.com/80?text=Nasi+Padang",
            resep: "Sajikan nasi dengan rendang, sayur daun singkong, dan sambal."
        },
        {
            namaMakanan: "Telur Balado",
            kalori: 200,
            protein: 12,
            karbohidrat: 6,
            lemak: 10,
            gambar: "https://via.placeholder.com/80?text=Telur+Balado",
            resep: "Goreng telur, lalu masak dengan bumbu cabai balado."
        },
        {
            namaMakanan: "Tongseng Kambing",
            kalori: 330,
            protein: 20,
            karbohidrat: 15,
            lemak: 20,
            gambar: "https://via.placeholder.com/80?text=Tongseng+Kambing",
            resep: "Masak daging kambing dengan bumbu kecap dan kuah santan."
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
