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
app.use(express.urlencoded({extended:true}));//for form endcoded data

app.get('/' , (req,res)=>{
    res.send("Root path pe aapka swagat h");
})

// Tastk - 1 Display all the blogs
app.get('/blogs' , (req,res)=>{
    res.render('index' , {comments});
})

// Tastk - 2 Show just a form for adding new blog
app.get('/blog/new' , (req,res)=>{
    res.render('new');
})

// Tastk - 3 To add the new blog to Database 
app.post('/blogs' , (req,res)=>{
    // console.log(req.body);
    // res.send("Chal gya");
    let {username , Comment} = req.body;
    comments.push({username , Comment , id:comments.length});
    res.redirect('/blogs');
})

// Task - 4 To show info about 1 particular blog
app.get('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    //console.log(id);
    let foundComment = comments.find(Comment => Comment.id == id);
    //console.log(foundComment);
    //res.send("Show particular page");
    res.render('show' , {foundComment});
})

//Task-5 to get the form for editing the blog
app.get('/blogs/:id/edit' ,(req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(Comment => Comment.id == id);
    //console.log(foundComment);
    res.render('edit' , {foundComment});
})

app.listen(8080 , ()=>{
    console.log("Server connected at 8080");
})