import productModel from "../models/productModel.js"

// Get Product API - /api/v1/products
const getProducts = async (req, res, next) => {
  const query = req.query.type?{ type :{
    $regex: req.query.type,
    $options: 'i',
  }}:{};
  const products = await productModel.find(query);

  res.json({
    success: true,
    products
  })
}

// Get Single Product API - /api/v1/products/:id
const getSingleProuduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product
    })
  } catch(err) {
    res.status(404).json({
      success: false,
      message: 'Unable to get product with that ID'
    })
  }
}


export {
  getProducts,
  getSingleProuduct
}