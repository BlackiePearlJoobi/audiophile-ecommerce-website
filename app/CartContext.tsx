"use client";

import { createContext, useContext, useState } from "react";
import type { CartItem } from "./types/product";

interface CartContextType {
  cartItems: { [key: number]: CartItem };
  updateCart: (productId: number, item: CartItem | null) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: CartItem }>({});

  const updateCart = (productId: number, item: CartItem | null) => {
    setCartItems((prevCart) => {
      if (item === null) {
        // Remove item from cart when `null` is passed
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }

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
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
