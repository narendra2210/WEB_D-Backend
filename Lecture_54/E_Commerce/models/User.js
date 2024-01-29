const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

// Schema bna diya
const userSchema = new mongoose.Schema({
    email:{
        type : String,
        trim : true,
        required : true
    }
})

// responsible to use properties of PLM
userSchema.plugin(passportLocalMongoose);



//model bna diya ab use krlo
let User = mongoose.model('User' , userSchema);

//Model export kr diya h ab import kr skte h
module.exports = User;