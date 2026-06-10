const express = require('express');
const app = express();
const cart = require('../db/cart');
const orders = require('../db/orders');

app.get('/summary', (req, res) => {
    try {
        let totalcost = 0, i;
        let shippingcost = cart.length * 40;

        for (i = 0; i < cart.length; i++) {
            totalcost += cart[i].price;
        }
        res.json({
            subtotal: (totalcost/100 + shippingcost)*100,
            shippingcost: shippingcost*100,
            totalitems: cart.length,
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
            orders.push(...cart);
            cart.length = 0;
            res.send("Placed order");
        }, 500);
    }
    catch (err) {
        console.log(err);
        res.status(409).send('Error');
    }
})

module.exports = app;