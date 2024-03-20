const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');
const quoteRoutes = require('./apis/quoteRoute');

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})


app.use(express.urlencoded({extended : true})); //forn data
app.use(express.json()); // json data
// cors mddleware
app.use(cors({origin:['http://localhost:3000']}));

app.use(quoteRoutes);

app.get('/hello' , (req,res)=>{
    res.status(200).json({msg : "hello from monu don"});
})


// seedDB();


const port = process.env.PORT || 8080 ;
app.listen(port , ()=>{
    console.log(`Server connected at port ${port}`);
})