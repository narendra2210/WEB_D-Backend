
const express = require('express');
const router = express.Router();// Mini instance or Mini Server

const Product = require('../models/Product');
const Review = require('../models/Review');

//server side validation middleware
const { validateReview } = require('../middleware');


router.post('/products/:productid/review',validateReview,async(req, res) => {


    try {
        //console.log(req.body);
        const { productid } = req.params;
        const { rating, comment } = req.body;

        const product = await Product.findById(productid);

        const review = new Review({ rating, comment });

        // Average Rating Logic
        const newAverageRating = ((product.avgRating * product.reviews.length) + parseInt(rating)) / (product.reviews.length + 1);
        product.avgRating = parseFloat(newAverageRating.toFixed(1));

        // Review object ko reviews array m daal rhe h joki products model m h
        product.reviews.push(review);

        // Product or review save kr diya h DB m
        await review.save();
        await product.save();

        // giving flash mssg and then it redirect to show 
        req.flash('success', 'Added your review successfully!');
        res.redirect(`/products/${productid}`);
    }

    catch (e) {
        res.status(500).render('error', { err: e.message });
    }
    
});



module.exports = router;