const express = require('express');
const app = express();

// session required
const session = require('express-session')

// session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}))

app.get('/', (req,res)=>{
    res.send('welcome to session')
})

// Session to count view
app.get('/viewcount' , (req,res)=>{
    if(req.session.count){
        req.session.count+=1; 
    }else{
        req.session.count=1;
    }
    res.send(`<h1>you visited the site ${req.session.count} times</h1>`)
})

app.get('/setname' , (req,res)=>{
    req.session.username = 'Sam';
    res.redirect('/greet');
})

app.get('/greet' , (req,res)=>{
    let {username = "anonymous"} = req.session;
    res.send(`<h1>hi from ${username}</h1>`);
})



app.listen(8080 , (req,res)=>{
    console.log('Server connected at port 8080');
})