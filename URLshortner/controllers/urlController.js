const url=require('../models/rlModel.js')
const express=require('express')
const app=express();
const { nanoid } = require('nanoid');



async function genrateUrl(req,res){
   

    const actUrl = req.body.actualurl;

    console.log(req.body);
    if(!actUrl){
       return res.status(404).json({err:"URL is mandatory"});
    }
    const shortUrl=nanoid(8);
    await url.create({shorturl:shortUrl,actualurl:actUrl})

    return res.status(201).json({
            message: "Short URL created",
        });


}

module.exports=genrateUrl;
