const express=require('express');
const app=express();
const products = require('../db/db');

app.get('/products',(req,res)=>{
    try{
        res.json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).send('ERROR');
    }
});

//console.log(products);
console.log("hello");

module.exports=app;