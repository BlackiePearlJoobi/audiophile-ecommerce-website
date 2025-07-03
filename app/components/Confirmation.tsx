"use client";

import React from "react";
import { useCart } from "../CartContext";
import Image from "next/image";
import Link from "next/link";

interface ConfirmationProps {
  backToHome: () => void;
}

const Confirmation = ({ backToHome }: ConfirmationProps) => {
  const { activeCartItems, cartTotal } = useCart();
  const product = Object.values(activeCartItems)[0];

  return (
    product && (
      <div className="fixed z-30 top-[89px] left-0 w-full h-[calc(100svh-89px)] overflow-auto transition-opacity duration-500 bg-[var(--black)]/40 opacity-100">
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-48px)] p-[32px] bg-[var(--white)] rounded-[8px] transition-[max-height] duration-500 ease-in-out flex flex-col sm:w-[540px] sm:p-[48px]">
          <Image
            src="/assets/checkout/icon-order-confirmation.svg"
            width={64}
            height={64}
            alt="Check icon"
          ></Image>
          <h1 className="text-[24px] leading-[28px] tracking-[0.86px] font-[var(--font-weight-bold)] text-[var(--black)] mt-[23px] mb-[16px] sm:text-[32px] sm:leading-[var(--line-height-bold-32)] sm:tracking-[var(--letter-spacing-bold-32)] sm:mt-[33px] sm:mb-[24px]">
            THANK YOU <br></br>FOR YOUR ORDER
          </h1>
          <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50">
            You will receive an email confirmation shortly.
          </p>
          <div className="my-[24px] flex flex-col sm:mt-[33px] sm:mb-[46px] sm:flex-row">
            <div className="p-[24px] bg-[var(--gray)] rounded-t-[8px] flex flex-col gap-[12px] sm:rounded-tr-none sm:rounded-l-[8px] sm:flex-3">
              <div className="flex flex-row items-center">
                <Image
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  width={64}
                  height={64}
                  alt={`thumnail of ${product.name}`}
                  className="rounded-[8px]"
                ></Image>
                <div className="w-full ml-[27px] flex flex-col sm:ml-[16px]">
                  <div className="flex flex-row">
                    <span className="text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)]">
                      {product.name}
                    </span>
                    <span className="text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)]/50 ml-auto">
                      x{product.amount}
                    </span>
                  </div>
                  <span className="text-[14px] leading-[25px] font-[var(--font-weight-bold)] text-[var(--black)]/50">
                    ${product.price.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
              {cartTotal.totalAmount - product.amount > 0 && (
                <>
                  <hr className="w-full border-0 h-[1px] bg-[var(--black)]/8 mx-auto" />
                  <p className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)] text-[var(--black)]/50 text-center">
                    and {cartTotal.totalAmount - product.amount} other
                    item&#40;s&#41;
                  </p>
                </>
              )}
            </div>
            <div className="pl-[24px] pt-[15px] pb-[19px] bg-[var(--black)] rounded-b-[8px] flex flex-col gap-[8px] sm:py-0 sm:rounded-bl-none sm:rounded-r-[8px] sm:justify-center sm:flex-2">
              <span className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--white)]/50">
                GRAND TOTAL
              </span>
              <span className="text-[18px] font-[var(--font-weight-bold)] text-[var(--white)]">
                $ {cartTotal.grandTotal.toLocaleString("en-US")}
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-full h-[48px] flex items-center justify-center"
            onClick={backToHome}
          >
            BACK TO HOME
          </Link>
        </section>
      </div>
    )
  );
};

export default Confirmation;
