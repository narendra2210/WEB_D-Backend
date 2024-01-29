const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

// to show the form of signup
router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

// to actually want to register a user in DB
router.post('/register' ,async (req,res)=>{
    try{
        let {email,password,username} = req.body;
        const user = new User({email , username});
        const newUser = await User.register(user , password);
        // res.send(newUser);
        // res.redirect('/login'); it is not correct as after sign up it should directs to logged in account
        
        // sign up ke baad direct products pe redirect ho jayega
        // no need to login
        req.login(newUser , function(err){
            if(err){return next(err);}
            req.flash('success' , 'Welcome You are successfully registered');
            return res.redirect('/products');
    })
    }
    catch(e){
        req.flash('error' , e.message);
        return res.redirect('/signup');
    }
})

// to get login form
router.get('/login' , (req,res)=>{
    res.render('auth/login');
})

// to actually login via Db
router.post('/login' , 
    passport.authenticate('local',    // strategy local use ho rhi h
    { 
        failureRedirect: '/login',   // if fail ho to redirect to login
        failureMessage: true         // failure message dena h ya nhi
    }),
    (req,res)=>{
    // console.log(req.user);
    req.flash('success' , 'Welcome back'); //flash mssg
    res.redirect('/products');
})


// logout
router.get('/logout' , (req,res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success' , 'Good Bye');
    res.redirect('/login');
})




module.exports = router;