import React, { useEffect, useState, useContext } from "react";
import axios from "../axios";
import { categories } from "../Constants/index";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

const ProductDisplay = () => {
  const [products, setProducts] = useState([]); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const { addToCart } = useContext(CartContext); 

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/products?${searchParams.toString()}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  
  const handleCategoryClick = (category) => {
    setSearchParams({ type: category });
  };

  const handleAddToCart = (product) => {
    addToCart(product); 
    
  };

  
  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Introducing our products</h1>

      <div className="flex flex-col md:flex-row">
        {/* Categories Section */}
        <aside className="md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg p-4 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category); // Handle category click
                    }}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <section className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg p-4 shadow-lg"
              >
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-green-600 font-medium text-lg">₹{product.price}</p>

                {/* Add to Cart Button */}
                <button
                  className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition"
                  onClick={() => handleAddToCart(product)} // Calling addToCart with the product data
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products found for the selected category.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductDisplay;
