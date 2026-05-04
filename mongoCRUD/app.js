const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
//app
const maongoose=require('mongoose');
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb://127.0.0.1:27017/MY_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.8.2").then(()=>{
    console.log("Database connected")
}).catch((err)=>{console.log(err)})

const newSchema=new maongoose.Schema({
    firstName:{
        type:String,
        Required:true,
    },
    lastName:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Contact:{
        type:String,
        required:true
    }
},{
        timestamps:true
    })
const user=mongoose.model('user',newSchema);

app.post('/user', async (req, res) => {
    
        const user = await User.create(req.body);
        res.json(user);
    
});
