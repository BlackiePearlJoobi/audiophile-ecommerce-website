import React from "react";

const AddToCartButton = () => {
  return (
    <div className="flex flex-row gap-[16px]">
      <div className="w-[120px] h-[48px] bg-[var(--gray)] flex flex-row items-center">
        <button
          type="button"
          className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
        >
          -
        </button>
        <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] w-[40px] h-full flex items-center justify-center">
          1
        </span>
        <button
          type="button"
          className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)]/25 w-[40px] h-full cursor-pointer hover:text-[var(--dark-orange)]"
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-[160px] h-[48px] flex items-center justify-center cursor-pointer"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartButton;
