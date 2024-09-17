import React, { createContext, useState, useMemo } from "react";
import { toast } from "react-toastify";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const stockMsg = (message) => {
    if (message === "Out of stock") {
      toast.error(message);
    }
    else{
      toast.success(message);
    }
  };

  const addToCart = (product) => {
    const productExists = cart.find((item) => item._id === product._id);

    if (productExists) {
      if (productExists.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item._id === product._id
              ? { ...productExists, quantity: productExists.quantity + 1 }
              : item
          )
        );
        stockMsg("Item added to cart successfully!");
      } else {
        stockMsg("Out of stock");
      }
    } else {
      if (product.stock > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
        stockMsg("Item added to cart successfully!");
      } else {
        stockMsg("Out of stock");
      }
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
    toast.error('Item removed from cart successfully!');
  };

  const cartCount = useMemo(() => {
    return cart.length;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
