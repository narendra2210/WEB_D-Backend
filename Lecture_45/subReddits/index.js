const express = require('express');
const app = express();

// app.get('/' , (req,res)=>{
//     res.send('<h1>Root Route</h1>');
// })
// app.get('/r/apple' , (req,res)=>{
//     res.send('<h1>apple Route</h1>');
// })
// app.get('/r/orange' , (req,res)=>{
//     res.send('<h1>orange Route</h1>');
// })
// app.get('/r/banana' , (req,res)=>{
//     res.send('<h1>banana Route</h1>');
// })

app.get('/r/:subreddit' , (req,res)=>{
    let {subreddit} = req.params;
    res.send(`<h1>My route is ${subreddit}</h1>`);
})

app.listen(8080 , ()=>{
    console.log('Server connected to 8080');
})