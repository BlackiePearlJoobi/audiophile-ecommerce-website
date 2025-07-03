"use client";

import React from "react";
import type { CartItem } from "../types/definitions";
import { useState } from "react";
import { useCart } from "../CartContext";

interface AddToCartButtonProps {
  product: CartItem;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { cartItems, updateCart } = useCart();
  const [count, setCount] = useState(1);

  const countUp = () => {
    const updatedAmount = count + 1;
    setCount(updatedAmount);
  };

  const countDown = () => {
    const updatedAmount = Math.max(count - 1, 1);
    setCount(updatedAmount);
  };

  const addToCart = () => {
    updateCart(product.id, {
      ...cartItems[product.id],
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      amount: count,
    });
  };

  return (
    <div className="flex flex-row gap-[16px]">
      <div className="w-[120px] h-[48px] bg-[var(--gray)] flex flex-row items-center">
        <button
          type="button"
          className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
          onClick={countDown}
        >
          -
        </button>
        <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] w-[40px] h-full flex items-center justify-center">
          {count}
        </span>
        <button
          type="button"
          className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
          onClick={countUp}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-[160px] h-[48px] flex items-center justify-center cursor-pointer"
        onClick={addToCart}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartButton;
