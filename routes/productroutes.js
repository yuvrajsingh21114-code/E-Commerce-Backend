const express=require('express');
const app=express();
const products = require('../db/products');
const Cart = require('../db/cart');

app.get('/products',(req,res)=>{
    try{
        res.json(products);
    }
    catch(err){
        console.log(err);
        res.status(500).send('ERROR');
    }
});

app.get('/Cart',(req,res)=>{
    try{
        res.json(Cart);
    }
    catch(err){
        console.log(err);
        res.status(500).send('ERROR');
    }
});


module.exports=app;