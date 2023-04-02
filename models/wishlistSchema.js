const mongoose = require('mongoose')
//wishlistSchema
const wishlistSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        unique:true
    },
    title: {
        type: String,
        required:true,
        trim:true
    },
    price: {
        type: Number,
        required:true,
        trim:true
    },
    description: {
        type: String,
        required:true,
        trim:true
    },
    category: {
        type: String,
        required:true,
        trim:true
    },
    image: {
        type: String,
        required:true,
        trim:true
    }
})

//to cretae model
const wishlists = new mongoose.model("wishlists",wishlistSchema)



//export model
module.exports = wishlists