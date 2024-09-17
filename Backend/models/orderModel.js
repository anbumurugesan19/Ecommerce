import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  amount: String, 
  status: String,
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;