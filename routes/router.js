const express = require('express')
const router = new express.Router()
const controllers = require('../controllers/productController')

//api
//get all products
router.get('/products/all-products',controllers.getallproducts)
//get single product
router.get('/products/:id',controllers.getSingleproduct)
//get-wishlist
router.get('/get-wishlist',controllers.getwishlist)
//add to wishlist
router.post('/products/add-to-wishlist',controllers.addtowishlist)
//remove-wishlist-item
router.delete('/wishlist/remove-item/:productId',controllers.removewishlistItem)

//add to cart
router.post('/products/add-to-cart',controllers.addtocart)
//get-cart
router.get('/get-cart',controllers.getcart)

//incremnet cart item
router.get('/cart/increment-item/:id',controllers.incCartItem)
//decremnet cart item
router.get('/cart/decrement-item/:id',controllers.decCartItem)

//remove-cart-item
router.delete('/cart/remove-item/:id',controllers.removeCartItem)
//empty cart
router.delete('/empty-cart',controllers.emptyCart)

module.exports = router