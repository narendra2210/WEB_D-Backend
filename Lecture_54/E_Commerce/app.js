const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');



mongoose.connect('mongodb://127.0.0.1:27017/shopping-monu-app')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log('DB not connected');
    console.log(err);
})

app.engine( 'ejs', ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

// Seeding database
//seedDB();

//Har incoming request ke liye path check kiya jaye
app.use(productRoutes);

//Har incoming request ke liye path check kiya jaye
app.use(reviewRoutes);



app.listen(8080 , ()=>{
    console.log("Server connected at port 8080");
})