const mongoose = require('mongoose');
const Review = require('./Review');

// Schema bna diya
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    } , 
    img:{
        type:String,
        trim:true
    } ,
    price: {
        type:Number,
        // min:0,
        required:true
    } ,
    desc: {
        type:String,
        trim:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ] , 
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// Middleware jo Behind the sce. mongoDB operations karwane par use hota h 
// & iske andar Pre and Post middleware use hota hai which are 
// basically used over schema & before the model .

// Middleware knows everything that after deleting product it has
// to delete the reviews also .

// ye middleware kab chal rha hoga jab mera product.js route m 
// [ await Product.findByIdAndDelete(id) ] trigger ho rha hoga
// to wha se product deliver hora hoga uspe ye middleware kaam kr rha h

// product m id catch ho rahi h

productSchema.post('findOneAndDelete' , async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})


//model bna diya ab use krlo
let Product = mongoose.model('Product' , productSchema);


//Model export kr diya h ab import kr skte h
module.exports = Product;