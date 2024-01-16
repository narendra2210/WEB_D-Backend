const mongoose = require('mongoose');

// Schema bna diya
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true , 
        required : true
    },
    img : {
        type : String,
        trim : true 
        // default : 
    },
    price : {
        type : Number,
        min : 0,
        required : true
    },
    desc : {
        type : String ,
        trim : true
    }
})

//model bna diya ab use krlo
let Product = mongoose.model('Product' , productSchema);

//Model export kr diya h ab import kr skte h
module.exports = Product;