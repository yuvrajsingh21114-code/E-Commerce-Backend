const express = require('express');
const app = express();
app.use(express.json());
const Cart = require('../db/cart');
const orders = require('../db/orders');

app.get('/summary', (req, res) => {
    try {
        let totalcost = 0, i;
        let shippingcost=0;
        Cart.forEach((product)=>{
            if(product.delivery==1){
                return shippingcost+=40;
            }
            else if(product.delivery==2){
                return shippingcost+= 60;
            }
            else if(product.delivery==3){
                return shippingcost+= 100;
            }
        });
        for (i = 0; i < Cart.length; i++) {
            totalcost += Cart[i].price;
        }
        res.json({
            subtotal: (totalcost/100 + shippingcost)*100,
            shippingcost: shippingcost*100,
            totalitems: Cart.length,
            total: totalcost
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
});

app.post('/summary', (req, res) => {
    try {
        setTimeout(() => {
            orders.push(...Cart);
            Cart.length = 0;
            res.send("Placed order");
        }, 500);
    }
    catch (err) {
        console.log(err);
        res.status(409).send('Error');
    }
});

app.get('/Cart', (req, res) => {
    try {
        res.json(Cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('ERROR');
    }
});

app.put('/Cart', (req,res) => {
    try{
        const product=Cart.find((product)=>{
            return product.id===req.body.id;
        });

        product.delivery=Number(req.body.delivery);
        res.send("Delivery updated");

    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error');
    }
})

module.exports=app;