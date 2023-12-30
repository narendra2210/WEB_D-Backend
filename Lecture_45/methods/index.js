const express = require('express');
const app = express();

//Default path = '/'
app.get('/' , (req , res)=>{
    res.send('<h1> Root </h1>');
})
app.get('/cat' , (req , res)=>{
    res.send('<h1> Cat path </h1>');
})
app.get('/dog' , (req , res)=>{
    res.send('<h1> Dog path</h1>');
})
// universal = '*'
app.get('*' , (req , res)=>{
    res.send('<h1>Bad Request</h1>');
})


app.listen(8080 , ()=>{
    console.log("Server connected at 8080");
})