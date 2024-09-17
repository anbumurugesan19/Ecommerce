import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import {toast} from 'react-toastify'

const ProductCard = ({ product, addToCart }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product); 

      };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className="max-w-xs mx-auto border rounded-lg shadow-lg p-4 relative group">
            <div className="relative">
                <img 
                    src={product.images[0].image} 
                    alt={product.name} 
                    className={`w-full h-auto rounded-lg transition-transform duration-300 ${isZoomed ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isZoomed ? 'opacity-100' : ''}`}>
                    <button 
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition mr-2"
                        onClick={toggleZoom}
                    >
                      <FaSearch />
                    </button>   
                </div>
            </div>
            <p className="text-lg font-semibold mt-4">{product.name}</p>
            <p className="text-green-600 font-medium text-lg">₹{product.price}</p>
            <button 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                onClick={() => handleAddToCart(product)}
            >
                Add to Cart
            </button>
            {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40 p-4">
                    <div className="relative bg-white p-4 rounded-lg max-w-full max-h-[80vh] overflow-auto">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="max-w-full max-h-full rounded-lg"
                        />
                        <p className="text-lg text-black font-semibold mt-4">{product.name}</p>
                        <p className="text-green-600 font-medium text-lg">₹{product.price}</p>
                        <p className="text-lg text-black font-semibold mt-4">{product.description}</p>
                        <button 
                            className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            onClick={toggleZoom}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;