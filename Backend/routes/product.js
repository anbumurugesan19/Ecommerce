import express from "express";
import { getProducts, getSingleProuduct } from "../controllers/productController.js";
const router = express.Router();

router.route('/products')
  .get(getProducts)

router.route('/products/:id')
  .get(getSingleProuduct)

export default router;