const express = require('express');
const app = express();
const session = require('express-session');
const fileStore=require('session-file-store')(session);

app.use(express.urlencoded({ extended: true }));

app.use(session({
    store:new fileStore({}),
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
     if (req.session.userName) {
        return res.redirect("/home");
    }
    res.render("login");
});

app.post("/login", (req, res) => {
    const { username,userPass} = req.body;
    console.log(username);
    req.session.userName = username;
    

    if (username) {
        res.redirect("/home");
    }
});

app.get("/home", (req, res) => {
    if (!req.session.userName) {
        return res.redirect("/login");
    }

    res.render("home", { userName: req.session.userName });
});
app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.render("login");
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});