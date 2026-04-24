const fs=require('fs');
const reqFilter=(req,res,next)=>{
    console.log("Hello middleware");
    res.json({name:"yashi"});
    console.log(res.json);
        next();
};
const logFile=(req,res,next)=>{
    const date=new Date();
    fs.appendFile('log.txt',`${date} logged in ${req.name}`,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("registered");
        }
    });
}

module.exports={reqFilter,logFile};
