const express=require('express');
const path=require('path');
const app=express();
const public=path.join(__dirname,'/Public');
app.use(express.static(public));
app.get('/Home',(req,res)=>{
    res.sendFile(`${public}/Home.html`);}
);
app.get('/profile',(req,res)=>{
    res.sendFile(`${public}/Profile.html`);}
);
app.get('/about',(req,res)=>{
    res.sendFile(`${public}/Self_Intro.html`);}
);
app.get('/contact',(req,res)=>{
    res.sendFile(`${public}/Contact.html`);}
);

app.listen(3000);
