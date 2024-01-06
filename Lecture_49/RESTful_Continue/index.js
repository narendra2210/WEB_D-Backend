const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4 : uuid} = require('uuid');




//dummy array instead of DB
let comments = [
    {
        //id:0,
        id:uuid(),//returns id that is string
        username:"Monu",
        Comment:"kuch nhi"
    },
    {
        //id:1,
        id:uuid(),
        username:"Thakur",
        Comment:"Ab tu gya"
    },
    {
        //id:2,
        id:uuid(),
        username:"Raghav",
        Comment:"polls aa gyi pols"
    },
    {
        //id:3,
        id:uuid(),
        username:"Rajput",
        Comment:"Sher hi khade"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true}));//for form endcoded data
app.use(methodOverride('_method'));//overriding for post to patch

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
    // comments.push({username , Comment , id:comments.length});
    comments.push({username , Comment , id:uuid()});
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

//Task-5 To get the form for editing the blog
app.get('/blogs/:id/edit' ,(req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(Comment => Comment.id == id);
    //console.log(foundComment);
    res.render('edit' , {foundComment});
})

//Task-6 Actually editing the blog using patch and not put
app.patch('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(Comment => Comment.id == id);
    // console.log(req.body);
    let {Comment} = req.body;
    foundComment.Comment = Comment;//changing old comment to new
    //res.send('Patch request sent');
    res.redirect('/blogs');
})

//Task-7 To delete a blog from DB
app.delete('/blogs/:id' , (req,res)=>{
    let {id} = req.params;
    let newArray = comments.filter((Comment)=>{return Comment.id != id});
    comments = newArray;
    res.redirect('/blogs');
})

app.listen(8080 , ()=>{
    console.log("Server connected at 8080");
})