const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-monu-app')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log('DB not connected');
    console.log(err);
})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));

// Seeding database
//seedDB();

//Har incoming request ke liye path check kiya jaye
app.use(productRoutes);

app.listen(8080 , ()=>{
    console.log("Server connected at port 8080");
})