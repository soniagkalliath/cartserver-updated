const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
    },
    rating: {
        rate: {
            type: Number,
            required:true
        },
        count: {
            type: Number,
            required:true
        }
    }
})

//to cretae model
const products = new mongoose.model("products",userSchema)

//export model
module.exports = products