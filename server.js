const express= require ('express');
const app= express();

const cors=require('cors');
app.use(cors());

const productroutes= require('./routes/productroutes');
app.use('/api/', productroutes);

const orderroutes= require('./routes/orderroutes');
app.use('/api/', orderroutes);

const cartroutes= require('./routes/cartroutes');
app.use('/api/', cartroutes);

const path= require('path');
app.use('/api/uploads',express.static(path.join(__dirname,"uploads")));

app.listen(5000,()=>{
    console.log("Server Running at port 5000")
});