const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>{
    const date=new Date();
    if(request.url==='/favicon.ico'){
        response.writeHead(204);
        response.end();return;
    }
    fs.appendFile("log.txt",`${date}:New Request recorded\n`,(err)=>{
        if(err){
            console.log(err);
        }
    });
    response.setHeader("Access-control-Allow-Origin","*");
    response.write("server started succesfully");
 response.end();
});
server.listen(8000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is listening on http://localhost:8000");
});