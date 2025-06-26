import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="z-0 px-[24px] pt-[32px] pb-[35px] bg-[var(--white)] flex flex-col gap-[16px] sm:px-[40px] sm:pt-[56px] sm:pb-[67px] sm:flex-row sm:gap-[10px] lg:px-[165px] lg:pb-[95px] lg:gap-[30px]">
      <div className="relative w-full h-[217px] flex flex-col items-center">
        <div className="absolute z-1 bg-[var(--gray)] rounded-[8px] top-[52px] left-0 w-full h-[165px] lg:top-[80px]"></div>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          width={79.92}
          height={104}
          alt="category: headphones"
          className="relative z-2 w-auto h-auto lg:h-[160px]"
        ></Image>
        <h3 className="z-2 text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)] mb-[17px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mb-[15px]">
          HEADPHONES
        </h3>
        <Link
          href="/headphones"
          className="z-2 flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
        >
          <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
            SHOP
          </span>
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={5}
            height={10}
            alt="right arrow"
            className="w-auto h-[10px]"
          ></Image>
        </Link>
      </div>
      <div className="relative w-full h-[217px] flex flex-col items-center">
        <div className="absolute z-1 bg-[var(--gray)] rounded-[8px] top-[52px] left-0 w-full h-[165px] lg:top-[80px]"></div>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          width={79.92}
          height={104}
          alt="category: headphones"
          className="z-2 relative w-auto h-auto lg:h-[160px]"
        ></Image>
        <h3 className="z-2 text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)] mb-[17px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mb-[15px]">
          SPEAKERS
        </h3>
        <Link
          href="/speakers"
          className="z-2 flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
        >
          <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
            SHOP
          </span>
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={5}
            height={10}
            alt="right arrow"
            className="w-auto h-[10px]"
          ></Image>
        </Link>
      </div>
      <div className="relative w-full h-[217px] flex flex-col items-center">
        <div className="absolute z-1 bg-[var(--gray)] rounded-[8px] top-[52px] left-0 w-full h-[165px] lg:top-[80px]"></div>
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          width={79.92}
          height={104}
          alt="category: headphones"
          className="z-2 relative w-auto h-auto lg:h-[160px]"
        ></Image>
        <h3 className="z-2 text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--black)] mb-[17px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mb-[15px]">
          EARPHONES
        </h3>
        <Link
          href="/earphones"
          className="z-2 flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
        >
          <span className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
            SHOP
          </span>
          <Image
            src="/assets/shared/desktop/icon-arrow-right.svg"
            width={5}
            height={10}
            alt="right arrow"
            className="w-auto h-[10px]"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
