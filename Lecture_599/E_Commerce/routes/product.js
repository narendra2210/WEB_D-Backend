
const express = require('express');
const router = express.Router(); //mini instance or Mini Server

const Product = require('../models/Product');

//server side validation middleware
const { validateProduct , isLoggedIn  , isSeller ,isProductAuthor} = require('../middleware');
const {showAllProducts, productForm , createProduct , showProduct , editProductForm , updateProduct , deleteProduct} =  require('../controllers/product')

// As it is dealing with DB so it has to use Async await
// To shw all the products
router.get('/products', showAllProducts );

// to show the form for new product
router.get('/products/new', isLoggedIn, isSeller, productForm);

// to actually add the product
router.post('/products', isLoggedIn, isSeller, validateProduct, createProduct);

// to show a particular product
router.get('/products/:id', isLoggedIn, showProduct);

// form to edit the product
router.get('/products/:id/edit',isLoggedIn,isProductAuthor, editProductForm);

// to actually edit the data in db
router.patch('/products/:id', isLoggedIn, isProductAuthor, validateProduct, updateProduct);

// to delete a product
router.delete('/products/:id',isLoggedIn,isProductAuthor,deleteProduct);


module.exports = router;