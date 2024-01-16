const express = require('express');

// to pass as object through router
const Product = require('../models/Product'); 

const router = express.Router(); // Mini instance or Mini Server


// As it is dealing with DB so it has to use Async await
router.get('/products' , async(req,res)=>{
    let products = await Product.find({});
    res.render('products/index' , {products});
})


module.exports = router;
