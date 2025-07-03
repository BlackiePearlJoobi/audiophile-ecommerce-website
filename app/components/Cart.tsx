"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cartItems, updateCart, clearCart } = useCart();
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    if (isCartOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCartOpened]);

  let totalAmount = 0;
  let totalPrice = 0;

  Object.values(cartItems).forEach((product) => {
    totalAmount += product.amount;
    totalPrice += product.amount * product.price;
  });

  return (
    <>
      <button
        type="button"
        className="relative z-10 cursor-pointer sm:ml-auto"
        onClick={() => setIsCartOpened(!isCartOpened)}
      >
        {totalAmount > 0 && (
          <span className="absolute -top-[18.5px] left-[58.5%] -translate-x-1/2 text-[15px] font-[var(--font-weight-bold)] text-[var(--orange)]">
            {totalAmount}
          </span>
        )}
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          width={23}
          height={20}
          alt="cart icon"
        ></Image>
      </button>
      <div
        className={`fixed z-20 top-[89px] left-0 w-full h-[calc(100svh-89px)] overflow-auto transition-opacity duration-500 ${isCartOpened ? "bg-[var(--black)]/40 opacity-100" : "opacity-0 pointer-events-none"}
      `}
      >
        <section
          className={`w-[calc(100vw-48px)] mx-[24px] my-[28px] px-[28px] py-[31px] bg-[var(--white)] rounded-[8px] transition-[max-height] duration-500 ease-in-out flex flex-col ${isCartOpened ? "max-h-auto" : "max-h-0"} sm:absolute sm:top-[24px] sm:right-[40px] sm:m-0 sm:max-w-[377px] sm:px-[32px] lg:top-[32px] lg:right-[165px]`}
        >
          <div className="flex flex-row justify-between">
            <h1 className="text-[18px] leading-[var(--line-height-bold-18)] tracking-[var(--letter-spacing-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)]">
              CART &#40;{totalAmount}&#41;
            </h1>
            {totalAmount > 0 && (
              <button
                type="button"
                className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 underline cursor-pointer hover:text-[var(--dark-orange)]"
                onClick={clearCart}
              >
                Remove all
              </button>
            )}
          </div>
          {totalAmount === 0 ? (
            <div className="flex flex-col items-center">
              <Image
                src="/assets/cart/empty-cart.jpg"
                width={200}
                height={200}
                alt="music notes"
                className="w-[130px] h-auto my-[24px]"
              ></Image>
              <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 mb-[24px]">
                Your added items will appear here
              </p>
              <button
                type="button"
                className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] border border-black border-solid hover:text-[var(--white)] hover:bg-[var(--black)] w-[160px] h-[48px] flex items-center justify-center cursor-pointer"
                onClick={() => setIsCartOpened(false)}
              >
                RETURN TO SHOP
              </button>
            </div>
          ) : (
            <>
              <ul className="my-[32px] flex flex-col gap-[24px]">
                {Object.values(cartItems).map((product) => (
                  <li key={product.id} className="flex flex-row items-center">
                    <Image
                      src={`/assets/cart/image-${product.slug}.jpg`}
                      width={64}
                      height={64}
                      alt={`thumnail of ${product.name}`}
                      className="rounded-[8px]"
                    ></Image>
                    <div className="ml-[16px] flex flex-col">
                      <span className="text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)]">
                        {product.name}
                      </span>
                      <span className="text-[14px] leading-[25px] font-[var(--font-weight-bold)] text-[var(--black)]/50">
                        $ {product.price.toLocaleString("en-US")}
                      </span>
                    </div>
                    <div className="ml-auto w-[96px] h-[32px] bg-[var(--gray)] flex flex-row items-center">
                      <button
                        type="button"
                        className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
                        onClick={() =>
                          updateCart(product.id, {
                            ...cartItems[product.id],
                            amount: product.amount - 1,
                          })
                        }
                      >
                        -
                      </button>
                      <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] w-[40px] h-full flex items-center justify-center">
                        {product.amount}
                      </span>
                      <button
                        type="button"
                        className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
                        onClick={() =>
                          updateCart(product.id, {
                            ...cartItems[product.id],
                            amount: product.amount + 1,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mb-[24px] flex flex-row justify-between">
                <span className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50">
                  TOTAL
                </span>
                <span className="text-[18px] leading-[var(--line-height-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)]">
                  $ {totalPrice.toLocaleString("en-US")}
                </span>
              </div>
              <Link
                href="/checkout"
                className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-full h-[48px] flex items-center justify-center"
                onClick={() => setIsCartOpened(false)}
              >
                CHECKOUT
              </Link>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Cart;
