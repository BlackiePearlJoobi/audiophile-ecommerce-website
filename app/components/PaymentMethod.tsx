"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [payWithEMoney, setPayWithEMoney] = useState(false);
  const [payInCash, setPayInCash] = useState(false);

  return (
    <fieldset>
      <legend className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[0.93px] font-[var(--font-weight-bold)] text-[var(--dark-orange)] mb-[16px]">
        PAYMENT DETAILS
      </legend>
      <div className="flex flex-col gap-[16px] sm:flex-row">
        <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)] sm:w-[calc(50%-8px)]">
          Payment Method
        </span>
        <ul className="flex flex-col gap-[16px] sm:w-[calc(50%-8px)]">
          <li className="flex flex-col gap-[9px]">
            <label
              htmlFor="e-money"
              className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] font-[var(--font-weight-bold)] tracking-[-0.25px] text-[var(--black)] flex items-center gap-[16px] cursor-pointer hover:border-[var(--dark-orange)]"
            >
              <input
                type="radio"
                id="e-money"
                name="payment_method"
                value="e-Money"
                required
                className="accent-[var(--dark-orange)]"
                onClick={() => {
                  setPayWithEMoney(true);
                  setPayInCash(false);
                }}
              />
              e-Money
            </label>
          </li>
          <li className="flex flex-col gap-[9px]">
            <label
              htmlFor="cash"
              className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] font-[var(--font-weight-bold)] tracking-[-0.25px] text-[var(--black)] flex items-center gap-[16px] cursor-pointer hover:border-[var(--dark-orange)]"
            >
              <input
                type="radio"
                id="cash"
                name="payment_method"
                value="Cash on Delivery"
                required
                className="accent-[var(--dark-orange)]"
                onClick={() => {
                  setPayWithEMoney(false);
                  setPayInCash(true);
                }}
              />
              Cash on Delivery
            </label>
          </li>
        </ul>
      </div>
      {payWithEMoney && (
        <ul className="mt-[32px] flex flex-col gap-[24px] sm:flex-row sm:flex-wrap sm:gap-x-[16px]">
          <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
            <label
              htmlFor="e_money_number"
              className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
            >
              e-Money Number
            </label>
            <input
              type="text"
              id="e_money_number"
              name="e_money_number"
              placeholder="238521993"
              required
              className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
            ></input>
          </li>
          <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
            <label
              htmlFor="e_money_PIN"
              className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
            >
              e-Money PIN
            </label>
            <input
              type="text"
              id="e_money_PIN"
              name="e_money_PIN"
              placeholder="6891"
              required
              className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
            ></input>
          </li>
        </ul>
      )}
      {payInCash && (
        <div className="mt-[30px] flex flex-row items-center gap-[32px]">
          <Image
            src="/assets/checkout/icon-cash-on-delivery.svg"
            width={48}
            height={48}
            alt="Icon of paying in cash"
          ></Image>
          <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50">
            The &#39;Cash On Delivery&#39; option enables you to pay in cash
            when our delivery courier arrives at your residence. Just make sure
            your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </fieldset>
  );
};

export default PaymentMethod;
