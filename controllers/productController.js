const products = require('../models/userSchema')
 
exports.getallproducts = async(req,res)=>{
    //logic 
    try{
        const allproducts = await products.find()
        res.status(200).json(allproducts)
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.getSingleproduct = async (req,res)=>{
    const {id} =req.params
     //logic 
     try{
        const product = await products.findOne({
            id
        })
        res.status(200).json(product)
    }
    catch(error){
        res.status(401).json(error)
    }
}