const mongoose = require('mongoose');

// Schema bna diya
const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }
} , {timestamps:true})

// toDateString , toTimeString , toLocaleString


//model bna diya ab use krlo
let Review = mongoose.model('Review' , reviewSchema);

//Model export kr diya h ab import kr skte h
module.exports = Review;