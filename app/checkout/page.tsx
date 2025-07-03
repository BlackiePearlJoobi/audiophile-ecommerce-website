"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../CartContext";
import { FormValues } from "../types/product";
import GoBackButton from "../components/GoBackButton";
import Summary from "../components/Summary";
import PaymentMethod from "../components/PaymentMethod";
import Confirmation from "../components/Confirmation";
import USStates from "../components/USStates";

const Checkout = () => {
  const { clearCart } = useCart();
  const formRef = useRef<HTMLFormElement>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10); // allow only 10 digits
    const len = digits.length;

    if (len === 0) return "";
    if (len <= 3) return `(${digits}`;
    if (len <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`;
  };

  // submit function (prop) passed to <Summary>'s payment button
  const submitOrder = () => {
    formRef.current?.requestSubmit();
  };

  // show the confirmation modal (everything validated at this point)
  const onSubmit = () => {
    setOrderConfirmed(true);
  };

  useEffect(() => {
    if (orderConfirmed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [orderConfirmed]);

  const backToHome = () => {
    clearCart();
    setOrderConfirmed(false);
  };

  return (
    <div className="w-full bg-[var(--snow)]">
      <GoBackButton></GoBackButton>
      <main className="mb-[97px] flex flex-col gap-[32px] sm:mb-[116px] lg:mb-[141px] xl:flex-row xl:gap-[32px]">
        <form
          ref={formRef}
          className="mx-[24px] px-[24px] pt-[24px] pb-[31px] bg-[var(--white)] rounded-[8px] flex flex-col gap-[32px] sm:mx-[40px] sm:px-[27px] sm:py-[30px] sm:gap-[41px] lg:mx-[165px] xl:mr-0 xl:px-[48px] xl:pt-[54px] xl:pb-[48px] xl:flex-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[1px] font-[var(--font-weight-bold)] text-[var(--black)] sm:text-[32px] sm:leading-[var(--line-height-bold-32)] sm:tracking-[var(--letter-spacing-bold-32)]">
            CHECKOUT
          </h1>
          <fieldset>
            <legend className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[0.93px] font-[var(--font-weight-bold)] text-[var(--dark-orange)] mb-[16px]">
              BILLING DETAILS
            </legend>
            <ul className="flex flex-col gap-[24px] sm:flex-row sm:flex-wrap sm:gap-x-[16px]">
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="name"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    Name
                  </label>
                  {typeof errors.name?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.name?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "This is required",
                  })}
                  autoComplete="name"
                  placeholder="Alexei Ward"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="mail"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    Email Address
                  </label>
                  {typeof errors.email?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  id="mail"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/i,
                      message: "Wrong format",
                    },
                  })}
                  autoComplete="email"
                  placeholder="alexei@mail.com"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="phone"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    Phone Number
                  </label>
                  {typeof errors.phone_number?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.phone_number?.message}
                    </span>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone_number", {
                    required: "This is required",
                    pattern: {
                      value: /^\(\d{3}\) \d{3} \d{4}$/,
                      message: "Wrong format",
                    },
                    // Live formatting
                    // Respect user backspace — so they can delete chars without re-injection immediately
                    onChange: (e) => {
                      const prev = e.target.value;
                      const next = formatPhone(prev);
                      if (next !== prev) {
                        setValue("phone_number", next);
                      }
                    },
                  })}
                  autoComplete="tel"
                  placeholder="(202) 555-0136"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[0.93px] font-[var(--font-weight-bold)] text-[var(--dark-orange)] mb-[16px]">
              SHIPPING INFO
            </legend>
            <ul className="flex flex-col gap-[24px] sm:flex-row sm:flex-wrap sm:gap-x-[16px]">
              <li className="flex flex-col gap-[9px] sm:w-full">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="street"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    Your Address
                  </label>
                  {typeof errors.street?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.street?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="street"
                  {...register("street", {
                    required: "This is required",
                  })}
                  autoComplete="street-address"
                  placeholder="1137 Williams Avenue"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <label
                  htmlFor="apt"
                  className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                >
                  Apartment / Suite #
                </label>
                <input
                  type="text"
                  id="apt"
                  name="apt"
                  autoComplete="address-line2"
                  placeholder="Apt #404"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="city"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    City
                  </label>
                  {typeof errors.city?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.city?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="city"
                  {...register("city", {
                    required: "This is required",
                  })}
                  autoComplete="address-level2"
                  placeholder="New York"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="state"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    State / Province
                  </label>
                  {typeof errors.state?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.state?.message}
                    </span>
                  )}
                </div>
                <select
                  id="state"
                  {...register("state", {
                    required: "This is required",
                  })}
                  autoComplete="address-level1"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                >
                  <USStates></USStates>
                </select>
              </li>
              <li className="flex flex-col gap-[9px] sm:w-[calc(50%-8px)]">
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="zip"
                    className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-bold)]"
                  >
                    ZIP Code
                  </label>
                  {typeof errors.zip?.message === "string" && (
                    <span className="text-[12px] tracking-[-0.21px] font-[var(--font-weight-medium)] text-[var(--red)]">
                      {errors.zip?.message}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="zip"
                  {...register("zip", {
                    required: "This is required",
                    pattern: {
                      value: /^[1-9]{5}(-[0-9]{4})?$/,
                      message: "Wrong format",
                    },
                  })}
                  autoComplete="postal-code"
                  placeholder="10001"
                  className="w-full h-[56px] px-[24px] border border-solid border-[#cfcfcf] rounded-[8px] text-[14px] tracking-[-0.25px] font-[var(--font-weight-bold)] text-[var(--black)] hover:border-[var(--dark-orange)] focus:border-[var(--dark-orange)] focus:outline-none focus:ring focus:ring-[var(--dark-orange)]"
                ></input>
              </li>
            </ul>
          </fieldset>
          <PaymentMethod register={register} errors={errors}></PaymentMethod>
          <input type="submit" className="hidden" />
        </form>
        <Summary submitOrder={submitOrder}></Summary>
      </main>
      {orderConfirmed && <Confirmation backToHome={backToHome}></Confirmation>}
    </div>
  );
};

export default Checkout;
