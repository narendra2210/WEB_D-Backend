const express = require('express');
const app = express();
const path = require('path');

// view engine set kr diya h taki template dekh sake
app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));

// static files ko use krne do
app.use(express.static(path.join(__dirname , 'public')));

app.get('/' , (req , res)=>{
    res.render('index');
})

app.listen(8080 , ()=>{
    console.log('Server connected at 8080');
})