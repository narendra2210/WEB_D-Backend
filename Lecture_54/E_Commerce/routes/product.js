const express = require('express');

// to pass as object through router
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance or Mini Server

//server side validation middleware
const {validateProduct , isProductAuthor , isLoggedIn, isSeller} = require('../middleware');

// As it is dealing with DB so it has to use Async await
// To shw all the products
router.get('/products' , async(req,res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index' , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// to show the form for new product
router.get('/product/new' , isLoggedIn , (req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually add the product
router.post('/products' , validateProduct , isLoggedIn , isSeller,   async(req,res)=>{
    try{
        let {name , img , price , desc} = req.body;
        // to create the database
        // author is for to check the seller can delte or not
        // author is coming from logged in
        await Product.create({name , img , price , desc , author:req.user._id});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})



// to show a particular product
router.get('/products/:id' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        //  msg : req.flash('msg') -> it is flah mssg object
        res.render('products/show' , {foundProduct , msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// form to edit the product
router.get('/products/:id/edit', isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit' , {foundProduct})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually edit the data in db
router.patch('/products/:id' , isLoggedIn , validateProduct ,  async(req,res)=>{
    try{
        let {id} = req.params;
        let {name , img , price , desc} = req.body;
        await Product.findByIdAndUpdate( id , {name , img , price , desc}  )
        // flash mssg
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// to delete a product
router.delete('/products/:id' , isLoggedIn , isProductAuthor , async(req,res)=>{
    try{
        let {id} = req.params;
        const product = await Product.findById(id);

        // Simple way to delete the reviews
        // const product = await Product.findById(id);
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id);
        // }

        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err : e.message});
    }
})


module.exports = router;