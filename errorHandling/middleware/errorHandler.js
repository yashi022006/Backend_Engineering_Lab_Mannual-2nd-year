const fs=require('fs');
//error handling middleware
const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
};

// application middleware
const logFile=(req,res,next)=>{
    const date=new Date();
    fs.appendFile('log.txt',`${date} logged in ${req.name}`,(err)=>{
        if(err){
            networkInterfaces(error);
        }
        else{
            console.log("registered");
            next();
        }
    });
}
// router middleware
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
module.exports = {errorHandler,logFile,checkAge};