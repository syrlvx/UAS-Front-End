const express = require("express");
const bcrypt = require('bcrypt');
const User = require('./model/user');
const isAdmin = require('./middleware/isAdmin');
const Article = require('./model/article');
const Chat = require("./model/chat");
const Food = require("./model/food");
const Subscription = require('./model/subscription')
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
mongoose.connect("mongodb://sherly:30juni2005@sherly-shard-00-00.iah1k.mongodb.net:27017,sherly-shard-00-01.iah1k.mongodb.net:27017,sherly-shard-00-02.iah1k.mongodb.net:27017/?ssl=true&replicaSet=atlas-tbb6cr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=sherly", {
useNewUrlParser: true,
useUnifiedTopology: true,
serverSelectionTimeoutMS: 5000 // waktu tunggu 5 detik
}).then(() => {
console.log('Connected to MongoDB');
}).catch(err => {
console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'rahasia', 
    resave: false,
    saveUninitialized: true
}));


app.set("view engine", "ejs");
app.use(expressLayouts);


app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin

    try {
        // Ambil artikel-artikel dari database
        const articles = await Article.find();

        // Render halaman dengan mengirimkan data artikel dan user info
        res.render("index.ejs", { 
            layout: false, 
            username: user ? user.username : null,  // Kirimkan username
            isAdmin,
            articles // Kirimkan artikel-artikel ke view
        });
    } catch (err) {
        console.error("Error fetching articles:", err);
        res.status(500).send("Error fetching articles");
    }
});

app.get("/pencarian", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("pencarian.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
});

app.get("/api/foods", async (req, res) => {
    try {
        const foods = await Food.find();  // Fetch all foods from MongoDB
        res.json(foods);  // Send the foods data as a JSON response
    } catch (error) {
        console.error('Error fetching foods:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/notes", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("notes.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
});

app.get("/planner", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("planner.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
});

app.get("/login", (req, res) => {
    res.render("login.ejs",{layout:false});
});

app.get("/consul", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("consul.ejs", { 
        layout: false, 
        username: user ? user.username : null,  
        isAdmin,
        userId: user ? user._id : null 
    });
});

app.post('/api/chats/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { sender, text } = req.body;

        console.log("Request received:", { userId, sender, text });

        let chat = await Chat.findOne({ userId });

        if (!chat) {
            console.log("Chat not found, creating new chat");
            chat = new Chat({ userId, messages: [] });
        }

        chat.messages.push({ sender, text });
        await chat.save();

        console.log("Message saved successfully:", { sender, text });
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error("Error in POST /api/chats:", error);
        res.status(500).json({ message: 'Error sending message', error });
    }
});

app.get('/api/chats/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const chat = await Chat.findOne({ userId });

        if (!chat) {
            return res.status(404).json({ message: 'Chat not found' });
        }

        res.json(chat.messages); // Hanya kirimkan pesan
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});
app.get('/api/chats/:userId', (req, res) => {
    const userId = req.params.userId;

    // Fetch messages from the database (or wherever they are stored)
    // Example: db.messages.find({ userId: userId })
    Chat.find({ userId: userId })
        .then(messages => {
            res.json(messages); // Send the messages as a response
        })
        .catch(err => {
            console.error('Error fetching messages:', err);
            res.status(500).send('Error fetching messages');
        });
});

app.get("/kalkulator", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("kalkulator.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
});

app.get("/mark", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("mark.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
});

app.get("/admin", isAdmin, async (req, res) => {
    try {
        const users = await User.find(); // Ambil semua data pengguna dari database
        res.render("admin.ejs", { layout: false, users }); // Kirim data pengguna ke template
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user data");
    }
});
app.get("/artikel", isAdmin, async (req, res) => {
    try {
        const articles = await Article.find(); // Ambil semua data artikel dari database
        res.render("admin_artikel.ejs", { layout: false, articles }); // Kirim data artikel ke template
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching article data");
    }
});
app.post('/deleteArticle/:id', async (req, res) => {
    const articleId = req.params.id;  // Get the article ID from the URL parameters

    try {
        // Try to delete the article by its ID
        const result = await Article.findByIdAndDelete(articleId);

        // If no article was found and deleted
        if (!result) {
            return res.status(404).send('Article not found');
        }

        // Redirect to the articles list page after successful deletion
        res.redirect('/artikel');  // Adjust this based on your route
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error deleting article');
    }
});
// Rute untuk memperbarui artikel
app.post('/editArticle/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id); // Ambil artikel berdasarkan ID

        if (!article) {
            return res.status(404).send('Artikel tidak ditemukan');
        }

        // Update data artikel
        article.judul = req.body.judul;
        article.subjudul = req.body.subjudul;
        article.paragraf1 = req.body.paragraf1;
        article.paragraf2 = req.body.paragraf2 || '';
        article.paragraf3 = req.body.paragraf3 || '';
        article.image1 = req.body.image1 || '';
        article.image2 = req.body.image2 || '';
        article.image3 = req.body.image3 || '';

        // Simpan perubahan ke database
        await article.save(); // Simpan perubahan

        res.redirect('/artikel'); // Redirect ke halaman admin
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating article');
    }
});

app.get("/adminpencarian", isAdmin, async (req, res) => {
    try {
        const foods = await Food.find(); // Ambil semua data pengguna dari database
        res.render("admin_pencarian.ejs", { layout: false, foods }); // Kirim data pengguna ke template
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user data");
    }
});

app.post("/addFood", isAdmin, async (req, res) => {
    try {
        const { namaMakanan, kalori, protein, karbohidrat, lemak, gambar, resep, bahan } = req.body;

        // Split the ingredients string into an array
        const bahanArray = bahan.split(',').map(item => item.trim());

        const newFood = new Food({
            namaMakanan,
            kalori,
            protein,
            karbohidrat,
            lemak,
            gambar,
            resep,
            bahan: bahanArray
        });

        await newFood.save(); // Save the new food item to the database

        res.redirect("/adminpencarian"); // Redirect to the admin search page after adding food
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding food");
    }
});
app.post("/editFood/:id", isAdmin, async (req, res) => {
    try {
        const food = await Food.findById(req.params.id); // Ambil data makanan berdasarkan ID

        if (!food) {
            return res.status(404).send('Makanan tidak ditemukan');
        }

        // Update data makanan
        food.namaMakanan = req.body.namaMakanan;
        food.kalori = req.body.kalori;
        food.protein = req.body.protein;
        food.karbohidrat = req.body.karbohidrat;
        food.lemak = req.body.lemak;
        food.gambar = req.body.gambar || '';
        food.resep = req.body.resep;
        
        // Split bahan menjadi array jika ada
        if (req.body.bahan) {
            food.bahan = req.body.bahan.split(',').map(item => item.trim());
        }

        // Simpan perubahan ke database
        await food.save();

        res.redirect("/adminpencarian"); // Redirect ke halaman admin setelah mengedit makanan
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating food");
    }
});

app.post('/deleteFood/:id', isAdmin, async (req, res) => {
    const foodId = req.params.id;  // Dapatkan ID makanan dari URL parameters

    try {
        // Coba untuk menghapus makanan berdasarkan ID
        const result = await Food.findByIdAndDelete(foodId);

        // Jika tidak ada makanan yang ditemukan dan dihapus
        if (!result) {
            return res.status(404).send('Makanan tidak ditemukan');
        }

        // Redirect ke halaman pencarian admin setelah berhasil menghapus makanan
        res.redirect('/adminpencarian');  // Sesuaikan dengan route yang Anda inginkan
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error deleting food');
    }
});



app.get("/adminconsul", isAdmin, async (req, res) => {
    try {
        const articles = await Article.find(); // Ambil semua data pengguna dari database
        res.render("admin_consul.ejs", { layout: false, articles }); // Kirim data pengguna ke template
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user data");
    }
});
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, 'username role');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Gagal mendapatkan daftar user." });
    }
});

app.get("/adminsubscribe", isAdmin, async (req, res) => {
    try {
        const subscriptions = await Subscription.find(); // Ambil semua data pengguna dari database
        res.render("admin_subscribe.ejs", { layout: false, subscriptions }); // Kirim data pengguna ke template
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user data");
    }
});

app.post('/deleteUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId); // Pastikan menggunakan model yang sesuai dengan database Anda
        res.redirect('/admin'); // Redirect ke halaman user setelah delete
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Failed to delete user");
    }
});

app.get("/signup",(req, res) => {
    res.render("signup.ejs",{layout:false});
});
app.post('/signup', async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // Validasi input
        if (!email || !password) {
            return res.status(400).json({ error: "Email dan password wajib diisi!" });
        }

        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email sudah terdaftar!" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Membuat user baru
        const newUser = new User({
            email,
            password: hashedPassword,
            username
        });

        await newUser.save();

        // Kirim response yang jelas agar frontend tahu kalau berhasil
        res.json({ success: true });  // Beri tahu frontend bahwa pendaftaran berhasil
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi input
        if (!email || !password) {
            return res.status(400).json({ error: "Email dan password wajib diisi!" });
        }

        // Cari pengguna berdasarkan email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Email atau password salah!" });
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Email atau password salah!" });
        }

        // Simpan informasi pengguna di sesi
        req.session.user = {
            _id: user._id,
            username : user.username,
            email: user.email,
            role: user.role
        };

        // Tanggapan berdasarkan role
        if (user.role === "admin") {
            return res.status(200).json({ success: true, message: "Login berhasil!", redirectTo: "/admin" });
        }

        res.status(200).json({ success: true, message: "Login berhasil!", redirectTo: "/" });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});
app.get('/session-status', (req, res) => {
   if (req.session.user) {
        res.json({ 
            loggedIn: true, 
            email: req.session.user.email, 
            username: req.session.user.username,  
            role: req.session.user.role,
            userId: req.session.user._id
        });
    } else {
        res.json({ loggedIn: false });
    }
});


app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: "Terjadi kesalahan saat logout." });
        }
        res.redirect('/'); // Redirect ke halaman utama setelah logout
    });
});
app.post('/subscribe', async (req, res) => {
    const { firstName, email } = req.body;

    try {
        // Validasi apakah email sudah terdaftar
        const existingSubscription = await Subscription.findOne({ email });

        if (existingSubscription) {
            return res.status(400).json({ error: 'Email already subscribed!' });
        }

        // Membuat entry baru untuk subscription
        const newSubscription = new Subscription({
            firstName,
            email,
        });

        // Menyimpan ke database
        await newSubscription.save();
        res.status(201).json({ message: 'Subscription successful!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/addArticle', async (req, res) => {
    try {
        const { judul, subjudul, paragraf1, paragraf2, paragraf3, image1, image2, image3 } = req.body;

        // Simpan artikel ke database
        const newArticle = new Article({
            judul,
            subjudul,
            paragraf1,
            paragraf2,
            paragraf3,
            image1,
            image2,
            image3,
        });

        await newArticle.save();
        res.redirect('/artikel'); // Redirect ke halaman artikel
    } catch (error) {
        console.error('Error adding article:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
  console.log(`Webserver app listening on port ${port}`);
});
