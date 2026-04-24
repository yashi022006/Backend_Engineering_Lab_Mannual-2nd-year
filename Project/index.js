const express = require('express');
const app = express();
const checkAge=require('./Middleware/middleware.js');
const router=express.Router();

router.use(checkAge);
app.get('',(req,res)=>{
    res.send("Welocme to Home Page")
})
app.get('/about',checkAge,(req,res)=>{
    res.send("Welcome to About Page");
})
app.use(router);
router.get('/contact',()=>{
    res.send("Welocme to Contact PAge");
})



app.listen('3000',()=>{
    console.log("http://localhost:3000");
})