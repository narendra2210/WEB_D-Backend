const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');



mongoose.connect('mongodb://127.0.0.1:27017/shopping-monu-app')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log('DB not connected');
    console.log(err);
})

// Session middleware
let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    //cookie: { secure: true }
}

app.engine( 'ejs', ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(session(configSession));   // session middleware
app.use(flash());                  // flash middleware

// Locals thing
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})



// Seeding database
//seedDB();

//Har incoming request ke liye path check kiya jaye
app.use(productRoutes);

//Har incoming request ke liye path check kiya jaye
app.use(reviewRoutes);



app.listen(8080 , ()=>{
    console.log("Server connected at port 8080");
})