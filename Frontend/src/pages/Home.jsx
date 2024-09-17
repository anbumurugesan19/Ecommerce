import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axios from "../axios";
const Home = () => {
  const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const response = await axios.get('/products');
  //   const data = response.data.products;
  //   console.log(data);
  //   setProducts(data);
  //   console.log(products);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, [])
  return (
      <div>
        
      </div>
  )
}

export default Home