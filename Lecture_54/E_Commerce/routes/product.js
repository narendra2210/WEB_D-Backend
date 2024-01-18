const express = require('express');

// to pass as object through router
const Product = require('../models/Product'); 

const router = express.Router(); // Mini instance or Mini Server



// As it is dealing with DB so it has to use Async await
// To shw all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find({});
    res.render('products/index' , {products});
})

// To show the form for new product
router.get('/product/new' , (req,res)=>{
    res.render('products/new');
})

//To actually add the product
router.post('/products' , async(req,res)=>{
    let {name , img , price , desc} = req.body;
    // to create the database
    await Product.create({name , img , price , desc});
    res.redirect('/products');
})


// To show the particular product
router.get('/products/:id' ,async (req , res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/show' , {foundProduct});
})

// Form to edit the product
router.get('/products/:id/edit' , async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit' , {foundProduct});
})

// To actually eidt the data in DB
router.patch('/products/:id' , async (req , res)=>{
    let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate(id , {name , img , price , desc});
    res.redirect(`/products/${id}`);

})

// To delete the product
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;
