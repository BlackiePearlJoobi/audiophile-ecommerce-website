"use client";

import React from "react";
import { useCart } from "../CartContext";
import Image from "next/image";

interface SummaryProps {
  submitOrder: () => void;
}

const Summary = ({ submitOrder }: SummaryProps) => {
  const { activeCartItems, cartTotal } = useCart();

  return (
    <section className="h-full mx-[24px] px-[24px] py-[32px] bg-[var(--white)] rounded-[8px] flex flex-col gap-[32px] sm:mx-[40px] sm:px-[33px] lg:mx-[165px] xl:ml-0 xl:flex-3">
      <h2
        id="summary-heading"
        className="text-[18px] leading-[var(--line-height-bold-18)] tracking-[var(--letter-spacing-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)]"
      >
        <span className="sr-only">ORDER </span>SUMMARY
      </h2>
      <ul className="flex flex-col gap-[24px]">
        {Object.values(activeCartItems).map((product) => (
          <li key={product.id} className="flex flex-row items-center">
            <Image
              src={`/assets/cart/image-${product.slug}.jpg`}
              width={64}
              height={64}
              alt={`thumnail of ${product.name}`}
              className="rounded-[8px]"
            ></Image>
            <div className="w-full ml-[16px] flex flex-col">
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
          </li>
        ))}
      </ul>
      <table aria-labelledby="summary-heading">
        <caption className="sr-only">Payment Details</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Charge Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 text-left pb-[8px]"
            >
              TOTAL
            </th>
            <td className="text-[18px] leading-[var(--line-height-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)] text-right pb-[8px]">
              $ {cartTotal.totalPrice.toLocaleString("en-US")}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 text-left pb-[8px]"
            >
              SHIPPING
            </th>
            <td className="text-[18px] leading-[var(--line-height-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)] text-right pb-[8px]">
              $ {cartTotal.SHIPPING}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 text-left pb-[8px]"
            >
              VAT &#40;INCLUDED&#41;
            </th>
            <td className="text-[18px] leading-[var(--line-height-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)] text-right pb-[8px]">
              $ {cartTotal.VAT.toLocaleString("en-US")}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 text-left pt-[16px]"
            >
              GRAND TOTAL
            </th>
            <td className="text-[18px] leading-[var(--line-height-bold-18)] font-[var(--font-weight-bold)] text-[var(--dark-orange)] text-right pt-[16px]">
              $ {cartTotal.grandTotal.toLocaleString("en-US")}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        type="button"
        className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-full h-[48px] flex items-center justify-center cursor-pointer"
        onClick={submitOrder}
      >
        CONTINUE & PAY
      </button>
    </section>
  );
};

export default Summary;
