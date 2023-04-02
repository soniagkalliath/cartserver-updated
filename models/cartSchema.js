const mongoose = require('mongoose')
//wishlistSchema
const cartSchema = new mongoose.Schema({
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
        required:true       
    },
    image: {
        type: String,
        required:true,
        trim:true
    },
    quantity:{
        type: Number,
        required:true
    },
    grantTotal:{
        type: Number,
        required:true
    }
})

//to cretae model
const cartitems = new mongoose.model("cartitems",cartSchema)



//export model
module.exports = cartitems