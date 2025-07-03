"use client";

import React from "react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="text-[15px] leading-[var(--line-height-medium-15)] tracking-[var(--letter-spacing-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 mx-[24px] mt-[16px] mb-[24px] cursor-pointer flex justify-start hover:text-[var(--dark-orange)] sm:mx-[40px] sm:mt-[48px] lg:mx-[165px] lg:mt-[79px] lg:mb-[38px]"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
