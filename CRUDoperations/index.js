
const fs=require('fs');
const express=require('express');
const app=express();
const users=require('./users.json')
app.use(express.urlencoded({extended:"true"}))
app.get('/api/users',(req,res)=>{
   return res.json(users)
})
app.get('/users',(req,res)=>{
   //res.send(res.json(users));
   const html=`
   <ul>
   ${users.map((user)=>`<li>${user.name}</li>`).join(' ')}
   </ul>
   `
   res.send(html);
})
//dynamic parameter in a route/url
app.get('/usersname/:id',(req,res)=>{
 const id=req.params.id;
 console.log(id);
 const userwise=users.find(user => user.id==id)
 return res.json(userwise);
})
app.delete('/usersname/:id',(req,res)=>{
 const id=Number(req.params.id)
 const user=JSON.parse(fs.readFileSync('users.json','utf-8'));
 const filterUser=user.filter(user => user.id!=id);
 fs.writeFileSync('users.json',JSON.stringify(filterUser,null,2));
 return res.json({message:"user deleted"});


})
app.post('/users',(req,res)=>{
   const data=req.body;
   console.log(data);
   users.push(data);
   
   fs.appendFile('users.json',JSON.stringify(data),(err)=>{
      if(err){
         console.log(err);
      }

   })
   return res.json({"Message":"done"});

})
app.listen(3000,()=>{
    console.log("http://localhost:3000/usersname/2");
});