import {React,useContext, useState, useEffect} from 'react';
import axios from '../axios'
import ProductCard from './ProductCard'; 
import { CartContext } from '../context/CartContext';


const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const { addToCart } = useContext(CartContext);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div className="container  mx-auto px-4 py-8">
      <p className="text-center text-green-600 text-3xl font-bold mb-8">Best Seller Product This Week!</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;
