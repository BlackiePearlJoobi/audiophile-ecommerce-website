"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, CartTotal } from "./types/product";

interface CartContextType {
  cartItems: { [key: number]: CartItem };
  activeCartItems: { [key: number]: CartItem };
  cartTotal: CartTotal;
  updateCart: (productId: number, item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // all cart items including those whose amount is 0 (deleted from the cart)
  // use it to edit the content of the cart
  const [cartItems, setCartItems] = useState<{ [key: number]: CartItem }>({});

  // cart items whose amount is more than 0
  // only use it to reference, do not to directly add/remove a product from it
  const activeCartItems = useMemo(
    () => Object.values(cartItems).filter((product) => product.amount > 0),
    [cartItems],
  );

  const cartTotal = useMemo(() => {
    const totalAmount = activeCartItems.reduce((sum, p) => sum + p.amount, 0);
    const totalPrice = activeCartItems.reduce(
      (sum, p) => sum + p.amount * p.price,
      0,
    );
    const SHIPPING = totalAmount ? 50 : 0;
    const VAT = Math.floor(totalPrice * 0.2);
    const grandTotal = totalPrice + SHIPPING + VAT;

    return { totalAmount, totalPrice, SHIPPING, VAT, grandTotal };
  }, [activeCartItems]);

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
    <CartContext.Provider
      value={{ cartItems, activeCartItems, cartTotal, updateCart, clearCart }}
    >
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
