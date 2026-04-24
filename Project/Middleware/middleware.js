const express=require('express');
const app=express();

const checkAge=(req,res,next)=>{
    const age=req.query.age;
    if(!age){
        res.send("Enter your age");
    }else if(age<18){
        res.send("not authorised");
    }else{
        console.log("welocme ")
        next();
    }
}
module.exports=checkAge;