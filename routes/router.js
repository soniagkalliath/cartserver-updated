const express = require('express')
const router = new express.Router()
const controllers = require('../controllers/productController')

//api
//get all products
router.get('/products/all-products',controllers.getallproducts)
//get single product
router.get('/products/:id',controllers.getSingleproduct)



module.exports = router