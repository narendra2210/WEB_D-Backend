const express = require('express');
const app = express();
const path = require('path');

// view engine set kr diya h taki template dekh sake
app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));

// static files ko use krne do
app.use(express.static(path.join(__dirname , 'public')));

//middleware To get the form data by Post using url-encoded
app.use(express.urlencoded({extended:true}));

app.get('/' , (req , res)=>{
    res.render('index');
})


//get request ko handle
app.get('/user' , (req,res)=>{
    // console.log(req.query);
    let {username , age} = req.query;
    res.send("Get request send successfully");
})

//post request ko handle
app.post('/user' , (req,res)=>{
    console.log(req.body);
    // let {username , age} = req.query;
    res.send("Post request send successfully");
})

app.listen(8080 , ()=>{
    console.log('Server connected at 8080');
})