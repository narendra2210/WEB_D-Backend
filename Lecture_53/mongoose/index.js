
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/goku')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log("Error while connecting DB");
    console.log(err);
})


// Schema  (blue-print)
const movieSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    year : Number,
    isWatched : Boolean
})

// Model (Js class) --> Collection for DB
const Movie = mongoose.model('Movie' , movieSchema);

//console.log(Movie);

let ironman = new Movie({ //create a new object using (model == js class)
    name:'Iron Man',
    rating : 9,
    year : 2012,
    isWatched : true
})

ironman.save();//db ke andar store krdega permanently

console.log(ironman);





