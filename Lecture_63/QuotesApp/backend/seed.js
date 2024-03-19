const mongoose = require('mongoose');
const Quotes = require('./models/Quote');


let dummyQuotes = [
    {
        author : 'Monu Don',
        text : 'Ab tu gya beta'
    },
    {
        author : 'Jatin beta',
        text : 'Na maane Na maaane'
    },
    {
        author : 'Ayush chela',
        text : 'Madam ji 35c lagega apko'
    },
    {
        author : 'Tejveer pehalwan',
        text : 'Ek essi ladki thi jisse m pyaar krta tha'
    },
]

async function seedDB(){
    await Quotes.deleteMany({});
    await Quotes.insertMany(dummyQuotes);
    console.log("DB seeded");
}


module.exports = seedDB;
