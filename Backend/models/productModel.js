import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  images: [
    {
      image: String
    }
  ],
  type: String, 
  stock: String
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;