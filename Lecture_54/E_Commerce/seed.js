const mongoose = require('mongoose');

//Product ke model ko export kr rahe h models se
const Product = require('./models/Product');


// Dummy data
const products = [
    {
        name : "Iphone 14 pro",
        img : "https://images.unsplash.com/photo-1678533511793-3e4098b854e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D",
        price : 129999,
        desc : "Titanium made Product" 
    },
    {
        name : "MacBook pro",
        img : "https://images.unsplash.com/photo-1525513688408-aef73a11a340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFja2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D",
        price : 149999,
        desc : "Hd Laptop Wallpapers" 
    },
    {
        name : "Air Pods Pro",
        img : "https://images.unsplash.com/photo-1600183042195-fa3f15d427e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWlyJTIwcG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price : 23999,
        desc : "Best Sound Quality"
    },
    {
        name : "Nike Shoes",
        img : "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww",
        price : 15999,
        desc : "Fitness Comfortable"
    },
    {
        name : "T-Shirt",
        img : "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        price : 999,
        desc : "Easy Fit"
    },
    {
        name : "Wrist Watch",
        img : "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww",
        price : 29999,
        desc : "Fossil"
    }
]

// To avoid promise we uses async await 
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully");
}

// jha use krna hoga kr lunga
module.exports = seedDB;
