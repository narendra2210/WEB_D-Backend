const express = require('express');
const app = express();
const path = require('path');


//dummy array instead of DB
let comments = [
    {
        id:0,
        username:"Monu",
        Comment:"kuch nhi"
    },
    {
        id:1,
        username:"Thakur",
        Comment:"Ab tu gya"
    },
    {
        id:2,
        username:"Raghav",
        Comment:"polls aa gyi pols"
    },
    {
        id:3,
        username:"Rajput",
        Comment:"Sher hi khade"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname , 'public')));

app.get('/' , (req,res)=>{
    res.send("Root path pe aapka swagat h");
})

app.get('/blogs' , (req,res)=>{
    res.render('index' , {comments});
})

app.listen(8080 , ()=>{
    console.log("Server connected at 8080");
})