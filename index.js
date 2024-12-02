const express = require("express");
const bcrypt = require('bcrypt');
const User = require('./model/user');
const isAdmin = require('./middleware/isAdmin');
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




app.get("/", (req, res) => {
    const user = req.session.user || null;
    const isAdmin = user && user.role === "admin"; // Periksa apakah user adalah admin
    res.render("index.ejs", { 
        layout: false, 
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
    });
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
        username: user ? user.username : null,  // Kirimkan username
        isAdmin 
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

app.get("/admin",isAdmin, (req, res) => {
    res.render("admin.ejs",{layout:false});
});

app.get("/signup",(req, res) => {
    res.render("signup.ejs",{layout:false});
});
app.post('/signup', async (req, res) => {
    try {
        const { email, password,username } = req.body;

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
        res.status(200).json({ success: true });
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
            role: req.session.user.role 
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

app.listen(port, () => {
  console.log(`Webserver app listening on port ${port}`);
});

