"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem } from "./types/product";

interface CartContextType {
  cartItems: { [key: number]: CartItem };
  updateCart: (productId: number, item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: CartItem }>({});

  // load from localStorage once on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCartItems(JSON.parse(storedCart));
    } catch (e) {
      console.error("Error loading cart from localStorage:", e);
    }
  }, []);

  // sync to localStorage on every cart update
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Error saving cart to localStorage:", e);
    }
  }, [cartItems]);

  const updateCart = (productId: number, item: CartItem) => {
    setCartItems((prevCart) => {
      return {
        ...prevCart,
        [productId]: item,
      };
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Reusable custom hook for using the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
