const express = require('express');
const app = express();
const path = require('path');

// view engine set kr diya h taki template dekh sake
app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));

const todos = ['Go to Gym' , 'Go to club' , 'Drink water'];

//root route
app.get('/' , (req,res)=>{
    // res.send('HI');
    // res.render('/views/index'); //By default /views hota h
    res.render('index');
})

//random file route
app.get('/random' , (req,res)=>{
    let number = Math.floor(Math.random() * 100);
    res.render('random' ,{number});
})

// Show ur tasks
app.get('/todo' , (req,res)=>{
    res.render('todos' , {todos});
})

app.listen(8080 , ()=>{
    console.log('Server connected at 8080');
})