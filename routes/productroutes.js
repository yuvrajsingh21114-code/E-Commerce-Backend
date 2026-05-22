const express=require('express');
const app=express();
app.use(express.json());
const Cart = require('../db/cart');
const products = require('../db/products');

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

app.post('/product',(req,res)=>{
    try{
        let reqdata=req.body.name;
        let data= products.find((products)=>{
            return products.name == reqdata;
        })
        Cart.push(data);
        res.send('Added to cart');
    }
    catch(err){
        console.log(err);
        res.status(500).send('update failed');
   
    }
});


module.exports=app;