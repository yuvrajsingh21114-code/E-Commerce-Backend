const express= require ('express');
const app= express();

const cors=require('cors');
app.use(cors());

const productroutes= require('./routes/productroutes');
app.use('/api/', productroutes);

const summaryroutes= require('./routes/summaryroutes');
app.use('/api/', summaryroutes);

app.listen(5000,()=>{
    console.log("Server Running at port 5000")
});