const express = require('express');
const app = express();

app.get('/search' ,(req,res)=>{
    //console.log(req.query);
    let {search} = req.query;
    res.send(search);
    // res.send(req.query);
    // res.send(req.query.search);
})

app.listen(8080 , ()=>{
    console.log('Server connected at 8080');
})