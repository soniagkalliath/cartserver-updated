const cartitems = require('../models/cartSchema')
const products = require('../models/userSchema')
const wishlists = require('../models/wishlistSchema')
 
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

//single product view
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

//adding product to wishlist
exports.addtowishlist = async (req,res)=>{
    const { id,title,price,description,category,image } = req.body;
    try{
    const product = await wishlists.findOne({
        id
    })
    if(product){
        res.status(401).json("Product already exist in your wishlist")
    }
    else{
        const newProduct = new wishlists({
            id,title,price,description,category,image
        })
        await newProduct.save();
            res.status(200).json("Item added to your wishlist!!!");
    }
}
catch (error) {
    res.status(401).json(error);
    console.log("catch block error")
}  
    
}

//getwishlist
exports.getwishlist = async(req,res)=>{
     //logic 
     try{
        const wishlistItem = await wishlists.find()
        res.status(200).json(wishlistItem)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove itemwishlist
exports.removewishlistItem = async(req,res)=>{
    //logic
   const {productId} = req.params
   try{
    const wishlistItem = await wishlists.deleteOne({
        id:productId
       })
       if(wishlistItem){
        const wishlistItem = await wishlists.find()
        res.status(200).json(wishlistItem)
       }
       else{
        res.status(401).json("Product is not in the list!!!")
       }
   }
   catch(error){
    res.status(401).json(error)
   }
}

//get cart
exports.getcart = async (req,res)=>{
    //logic
    try{
        const cart = await cartitems.find()
        res.status(200).json(cart)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//add to cart
exports.addtocart = async (req,res)=>{
    //logic
    const { id,title,price,quantity,image } = req.body;
    try{
        const cartItems = await cartitems.findOne({
            id
        })
        if(cartItems){
            //product already in cart, update its quantity
            cartItems.quantity+=1
            cartItems.grantTotal = cartItems.price*cartItems.quantity
            await cartItems.save()
            //send updated cart to client
            res.status(200).json("Items added to your cart")
        }
        else{
            //product not in cart, add item
            const newProduct = new cartitems({
                id,title,price,image,quantity,grantTotal:price
            })
            await newProduct.save();
            //send updated cart to client
            res.status(200).json("Item added to your cart")
        }
    }
    catch(error) {
        res.status(401).json(error)
    }
}

//increment cart item
exports.incCartItem = async (req,res)=>{
    //logic
    const { id } = req.params;
    try{
        const cartItems = await cartitems.findOne({
            id
        })
        if(cartItems){
            //product already in cart, update its quantity
            cartItems.quantity+=1
            cartItems.grantTotal = cartItems.price*cartItems.quantity
            await cartItems.save()
            const cart = await cartitems.find()
       
            //send updated cart to client
            res.status(200).json(cart)
        }
        else{
           
            //send updated cart to client
            res.status(404).json("Item not in your cart")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//decrement cart item
exports.decCartItem = async (req,res)=>{
    //logic
    const { id } = req.params;
    try{
        const cartItems = await cartitems.findOne({
            id
        })
        if(cartItems){
            //product already in cart, update its quantity
            cartItems.quantity-=1
            if(cartItems.quantity==0){
                const deleteItem = await cartitems.deleteOne({
                    id
                })
                if(deleteItem){
                    const cart = await cartitems.find()
                    //send updated cart to client
            res.status(200).json(cart)
                }
                else{
                    //send updated cart to client
            res.status(404).json("Item not in your cart")
                }
            }
            else{
                cartItems.grantTotal = cartItems.price*cartItems.quantity
            await cartItems.save()
            const cart = await cartitems.find()
       
            //send updated cart to client
            res.status(200).json(cart)
            }
        }
        else{
           
            //send updated cart to client
            res.status(404).json("Item not in your cart")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove single item from cart
exports.removeCartItem = async (req,res)=>{
    //logic
    const { id } = req.params;
    try{
        const deleteItem = await cartitems.deleteOne({
            id
        })
        if(deleteItem){
            const cart = await cartitems.find()
            //send updated cart to client
    res.status(200).json(cart)
        }
        else{
            //send updated cart to client
    res.status(404).json("Item not in your cart")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//empty cart
exports.emptyCart = async (req,res)=>{
    //logic
    try {
        const result = await cartitems.deleteMany({})
        res.status(200).json("Your cart is empty")
        
    }
    catch(error){
        res.status(401).json(error)
    }
}