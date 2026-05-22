const express= require('express');
const app= express();
const cart= require('../db/cart');

let totalcost=0,i;
let shippingcost=cart.length*40;

for(i=0;i<cart.length;i++){
    totalcost+=cart[i].price;
}

app.get('/summary',(req,res)=>{
    try{
        res.json({
            subtotal: totalcost+shippingcost,
            shippingcost: shippingcost,
            totalitems: cart.length,
            total: totalcost
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send('Error');        
    }
})

module.exports=app;