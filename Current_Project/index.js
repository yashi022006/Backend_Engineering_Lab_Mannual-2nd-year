
const express=require('express');
const {reqFilter}=require('./middleware');
const { logFile } = require('./middleware');
const app=express();
app.set('view engine','ejs');
app.use(reqFilter);
app.use(logFile);


app.get('',(req,res)=>{
    let student={
        name:'yashi upadhyay',
        roll_no:'2415001842',
        email:"yashiu3@gmail",
        age:19,
        hobbies:["sleeping","learning"]
    };
    res.render('home',{stu:student});
});
app.listen(8000,()=>{
    console.log("http://localhost:8000");
});
//Application of middleware in express js.
//Routing level Middleware in express js.
//Error handling Middleware in express js.
//Third party Middleware in express js.
//Built in Middleware in express js. ex CORS, express.json(), express.static() etc.