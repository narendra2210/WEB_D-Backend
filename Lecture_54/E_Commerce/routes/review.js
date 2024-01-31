const express = require('express');

const router = express.Router() // Mini instance or Mini Server
const Product = require('../models/Product');
const Review = require('../models/Review');

//server side validation middleware
const {validateReview} = require('../middleware');


router.post('/products/:id/review' , validateReview,  async(req,res)=>{
    try{
        //console.log(req.body);
        let {id} = req.params;
        let {rating,comment} =req.body;
        const product = await Product.findById(id);
        const review = new Review({rating,comment});

        // Review object ko reviews array m daal rhe h joki products model m h
        product.reviews.push(review);

        // Product or review save kr diya h DB m
        await review.save();
        await product.save();

        // giving flash mssg and then it redirect to show 
        req.flash('success' , 'Review added successfully');

        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})



module.exports = router;
