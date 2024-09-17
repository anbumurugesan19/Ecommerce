import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from '../axios';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const CartPage = () => {
  const { cart, setCart, addToCart, removeFromCart } = useContext(CartContext);
  const incrementQuantity = (product) => { 
    addToCart(product);
  };

  const decrementQuantity = (product) => { 
    if (product.quantity > 1) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      removeFromCart(product._id);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  async function placeOrderHandler() {
    try {
      const response = await axios.post('/orders', cart);
      console.log("Order placed successfully:", response.data);
      setCart([]);
      toast.success("Order placed successfully!");

    } catch (error) {
      console.error("Error placing the order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-black text-xl mb-4">Your cart is empty.</p>
          <Link
            to="/Product"
            className="text-green-500 underline hover:text-green-600"
          >
            Go to Products
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mb-6">
            {cart.map((product) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-center justify-between bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg p-4 shadow-lg"
              >
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0"
                />
                <div className="flex-1 text-center md:text-left px-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-green-600 font-medium text-lg">₹{product.price}</p>
                </div>
                <br />
                <div className="flex items-center justify-center md:justify-start">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    onClick={() => decrementQuantity(product)}
                  >
                    -
                  </button>
                  <span className=" text-green-600 mx-2">{product.quantity}</span>
                  <button
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                    onClick={() => incrementQuantity(product)}
                  >
                    +
                  </button>
                </div>
                <br />

                {/* Remove Button */}
                <button
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(product._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <p className="text-xl  text-green-600 font-semibold mb-4 md:mb-0">Total: ₹{calculateTotal()}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600" onClick={placeOrderHandler}>
              Proceed to Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
