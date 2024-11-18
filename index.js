const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;

//ejs

app.set("view engine", "ejs");
app.use(expressLayouts);

//static
app.use(express.static("public"));

const mahasiswa = [
    {
        name: "irvan",
        email: "irvan@irvan"
    },
    {
        name: "irvan2",
        email: "irvan2@irvan"
    },
    {
        name: "irvan3",
        email: "irvan3@irvan"
    }
];

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

app.get("/signup", (req, res) => {
    res.render("signup.ejs",{layout:false});
});

app.listen(port, () => {
  console.log(`Webserver app listening on port ${port}`);
});

