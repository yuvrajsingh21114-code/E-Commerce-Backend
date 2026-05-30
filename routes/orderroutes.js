const express= require('express');
const app=express();
const orders=require('../db/orders');

app.get('/orders',(req,res)=>{
    try{
        res.json(orders);
    }
    catch(err){
        res.send(500).send('Error');
        console.log(err);
    }
});

module.exports=app;

