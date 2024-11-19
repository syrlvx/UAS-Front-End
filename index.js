const express = require("express");
const bcrypt = require('bcrypt');
const User = require('./model/user');
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
    res.render("index.ejs",{layout:false});
});

app.get("/pencarian", (req, res) => {
    res.render("pencarian.ejs",{layout:false});
});

app.get("/login", (req, res) => {
    res.render("login.ejs",{layout:false});
});

app.get("/consul", (req, res) => {
    res.render("consul.ejs",{layout:false});
});

app.get("/kalkulator", (req, res) => {
    res.render("kalkulator.ejs",{layout:false});
});

app.get("/mark", (req, res) => {
    res.render("mark.ejs",{layout:false});
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs",{layout:false});
});
app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

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
            password: hashedPassword
        });

        await newUser.save();
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

app.listen(port, () => {
  console.log(`Webserver app listening on port ${port}`);
});

