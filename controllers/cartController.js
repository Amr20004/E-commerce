const Cart = require('../models/cart');

module.exports.showCartItems = async (req, res) => {
    const userId = req.user._id;
    let cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    console.log(cart);
    res.render("pages/cartPage", { cart });
}

module.exports.addToCart = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;
    // check if there cart created by user
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
        // if cart already created
        // i will check if the product already in the cart
        let exitingProduct = cart.products.find(
            (item) => item.product.toString() === productId.toString()
        );
        // if product already exit i will increment product quntity
        if (exitingProduct) {
            exitingProduct.quantity += 1;
        }
        // if not i will push it into the cart
        else {
            cart.products.push({ product: productId, quantity: 1 });
        }
        console.log(cart)
        await cart.save();
    } else {
        // create new cart, and then push product to into the cart
        let newCart = new Cart({
          user: userId,
          products: [{ product: productId, quantity: 1 }],
        });
        console.log(newCart)
        await newCart.save();
    }

    res.redirect("/cart");
    // res.redirect(`/product/${productId}`);
}