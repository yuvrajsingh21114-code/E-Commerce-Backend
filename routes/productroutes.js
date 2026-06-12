const express = require('express');
const app = express();
app.use(express.json());
const Cart = require('../db/cart');
const products = require('../db/products');

app.get('/products', (req, res) => {
    try {
        res.json(products);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('ERROR');
    }
});

app.post('/product', (req, res) => {
    try {
        let reqdata = req.body.id;

        let checking = Cart.find(product => product.id === reqdata);

        if (checking) {
            return res.status(409).json({
                message: 'Item Already Exists'
            });
        }

        setTimeout(() => {
            let data = products.find((products) => {
                return products.id == reqdata;
            });

            Cart.push(data);
            res.send('Added to cart');
        }, 500);

    }
    catch (err) {
        console.log(err);
        res.status(500).send('update failed');

    }
});


module.exports = app;