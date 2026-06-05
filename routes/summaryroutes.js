const express= require('express');
const app= express();
const cart= require('../db/cart');
const orders= require('../db/orders');

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
});

app.post('/summary',(req,res)=>{
    try{
        orders.push(...cart);
        cart.length=0;
        res.send("Placed order");
    }
    catch(err){
        console.log(err);
        res.status(409).send('Error');
    }
})

module.exports=app;