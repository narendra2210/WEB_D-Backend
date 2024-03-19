const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})


app.use(express.urlencoded({extended : true}));

app.get('/hello' , (req,res)=>{
    res.status(200).json({msg : "hello from monu don"});
})


// seedDB();


const port = process.env.PORT || 8080 ;
app.listen(port , ()=>{
    console.log(`Server connected at port ${port}`);
})