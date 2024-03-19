const express = require('express');
const router = express.Router();

const Quotes = require('../models/Quote');

router.get('/allquotes' ,async (req,res)=>{
    try{
        let allquotes = await Quotes.find({});
        res.status(200).json(allquotes);
    }
    catch(e){
        res.status(400).json({msg : 'Something went wrong'});
    }
})

router.post('/addquotes' ,async (req,res)=>{
    let {author , text} = req.body;
    let Quote = await Quotes.create({author , text});
    res.status(200).json({msg : 'New Quote added successfully'})
})

module.exports = router