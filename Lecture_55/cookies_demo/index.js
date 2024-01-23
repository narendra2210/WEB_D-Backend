
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// cookie middleware
app.use(cookieParser('youNeedBetterSecret'));

// Signed cookie - more secure
app.get('/' , (req,res)=>{
    console.log(req.cookies);
//  res.send(req.cookies); // easy cookies
    res.send(req.signedCookies); // signed cookie 
 })

app.get('/getsignedcookie' , (req,res)=>{
    res.cookie('bindass' , 'sachin' , {signed : true});
    res.send('Cookie send successfully');
})



// UnSigned cookie - Less secure
// app.get('/' , (req,res)=>{
//     res.send('Root Route');
// })

// // cookie send kr diye h
// app.get('/setcookie' , (req,res)=>{
//     res.cookie('mode' , 'dark');
//     res.cookie('location' , 'mathura');
//     res.cookie('username' , 'monu');
//     res.send('Server send the cookies');
// })

// // cookie ko get krna h
// app.get('/getcookie' , (req,res)=>{
//     let {mode , location , username} = req.cookies;
//     res.send(`<h1> hi this is ${username} and i live in ${location} and i m in ${mode} mode </h1>`);
// })




app.listen(8080 , (req,res)=>{
    console.log("Server connected at port 8080");
})





