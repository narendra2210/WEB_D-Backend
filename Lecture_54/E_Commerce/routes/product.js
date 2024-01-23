const express = require('express');

// to pass as object through router
const Product = require('../models/Product'); 
const Review = require('../models/Review');

const router = express.Router(); // Mini instance or Mini Server

//server side validation middleware
const {validateProduct} = require('../middleware');



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

// To show the form for new product
router.get('/product/new' , (req,res)=>{
    
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

//To actually add the product
router.post('/products' , validateProduct ,  async(req,res)=>{
    
    try{
        let {name , img , price , desc} = req.body;
        // to create the database
        await Product.create({name , img , price , desc});
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// To show the particular product
router.get('/products/:id' ,async (req , res)=>{
    
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        res.render('products/show' , {foundProduct});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// Form to edit the product
router.get('/products/:id/edit' , async (req,res)=>{
    
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit' , {foundProduct});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// To actually edit the data in DB
router.patch('/products/:id' ,  validateProduct ,async (req , res)=>{
    
    try{
        let {id} = req.params;
        let {name , img , price , desc} = req.body;
        await Product.findByIdAndUpdate(id , {name , img , price , desc});
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }

})

// To delete the product
router.delete('/products/:id' , async(req,res)=>{
    
    try{
        let {id} = req.params;
        const product = await Product.findById(id);
        
        // Simple way to delete the reviews
        // const product = await Product.findById(id);
        // for(let id of product.reviews){
        //     await Review.findByIdAndDelete(id);
        // }
        
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


module.exports = router;
