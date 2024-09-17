import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";

// Create Order - /api/v1/order
const createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0)).toFixed();
  const status = 'pending'; 
  const order = await orderModel.create({cartItems, amount, status});

  //updating product stock
  cartItems.forEach(async (item) => {
     const product = await productModel.findById(item._id);
     product.stock = product.stock - item.quantity;
     await product.save();
  })

  res.json({
    success: true,
    order
  });
}

export {
  createOrder
}