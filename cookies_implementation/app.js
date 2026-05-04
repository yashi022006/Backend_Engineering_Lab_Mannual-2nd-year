const express=require('express')
const app=express()
const cookieParser=require('cookie-parser');
app.use(cookieParser());
//x -access attack javascript injection if httppnly:false
app.get('/home',(req,res)=>{
    res.cookie("userName","Yashi",{
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:false
    });
    res.send("Cookie setup successfully");
})
app.get('/getcookie',(req,res)=>{
    const content=req.cookies.userName;
    res.send(content)
})
app.delete('/deletecookie',(req,res)=>{
   
})
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});