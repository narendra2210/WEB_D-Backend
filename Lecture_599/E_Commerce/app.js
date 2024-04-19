
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

// passport
const passport =  require('passport');
const LocalStrategy =  require('passport-local');
const User = require('./models/User');


const seedDB = require('./seed')
const MongoStore = require('connect-mongo');

const dbURL = process.env.dbURL || 'mongodb://localhost:27017/shopping-monu-app';

mongoose.set('strictQuery', true);
mongoose.connect(dbURL)
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // view folder
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


let secret = process.env.SECRET || 'weneedabettersecretkey';

let store = MongoStore.create({
    secret:secret,
    mongoUrl: dbURL,
    touchAfter:24*60*60
})

// Session middleware
const sessionConfig = {
    store:store,
    name:'bhaukaal',
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        expires:Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}

app.use(session(sessionConfig)); //session middleware
app.use(flash()); // flash middleware

// passport vaali
// passport initialize
app.use(passport.initialize());
app.use(passport.session());

//use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));


// Locals thing - jo code baar baar use hora hoga usko locals m likhte h
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// seedDB();

// Routes require
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const productApi = require('./routes/api/productapi');
const paymentRoutes = require('./routes/payment');


app.get('/' , (req,res)=>{
    res.render('home');
})

// middle express
app.use(productRoutes); //so that harr incoming request ke liye path check kiya jaae
app.use(reviewRoutes);  //so that harr incoming request ke liye path check kiya jaae
app.use(authRoutes);  //so that harr incoming request ke liye path check kiya jaae
app.use(cartRoutes);  //so that harr incoming request ke liye path check kiya jaae
app.use(productApi);  //so that harr incoming request ke liye path check kiya jaae
app.use(paymentRoutes);  //so that harr incoming request ke liye path check kiya jaae


const port = 5000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});