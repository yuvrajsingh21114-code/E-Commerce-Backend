const express=require('express');
const app=express();
const products = require('../db/db');
const Cart = require('../db/db');

app.get('/products',(req,res)=>{
    try{
        res.json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).send('ERROR');
    }
});

app.get('/api/Cart',(req,res)=>{
    try{
        res.json(Cart);
    }
    catch(err){
        console.log(err);
        res.status(500).send('ERROR');
    }
});


module.exports=app;