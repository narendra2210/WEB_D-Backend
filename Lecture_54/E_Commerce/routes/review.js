const express = require('express'); 

const router = express.Router(); // Mini instance or Mini Server
const Product = require('../models/Product');
const Review = require('../models/Review');


router.post('/products/:id/review' , async(req , res)=>{
    //console.log(req.body);
    let {rating , comment} = req.body;
    let {id} = req.params;
    const product = await Product.findById(id);
    const review = new Review({rating , comment});
    
    // Review object ko reviews array m daal rhe h joki products model m h
    product.reviews.push(review);

    // Product or review save kr diya h DB m
    await review.save();
    await product.save();

    res.redirect(`/products/${id}`);
})

module.exports = router;
