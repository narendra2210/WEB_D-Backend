const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// Passport
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');



const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');


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
    saveUninitialized: true,
    cookie: { 
        httpOnly : true,
        maxAge : 7*24*60*60*1000,   // session for 7 days
        expires : date.now() + 7*24*60*60*1000
    }
}

app.engine( 'ejs', ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(session(configSession));   // session middleware
app.use(flash());                  // flash middleware

// passport initialize
app.use(passport.initialize());
app.use(passport.session());

//use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Locals thing
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));



// Seeding database
//seedDB();

//Har incoming request ke liye path check kiya jaye
app.use(productRoutes);

//Har incoming request ke liye path check kiya jaye
app.use(reviewRoutes);

//Har incoming request ke liye path check kiya jaye
app.use(authRoutes);



app.listen(8080 , ()=>{
    console.log("Server connected at port 8080");
})