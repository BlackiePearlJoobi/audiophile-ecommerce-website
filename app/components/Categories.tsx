import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="z-0 mx-[24px] bg-[var(--white)] flex flex-col gap-[16px] sm:mx-[40px] sm:flex-row sm:gap-[10px] lg:mx-[165px] lg:gap-[30px]">
      <div className="relative w-full h-[217px] flex flex-col items-center lg:h-[284px]">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          width={79.92}
          height={104}
          alt="category: headphones"
          className="z-2 w-[145px] h-auto lg:w-[220px] lg:h-auto"
        ></Image>
        <div className="absolute z-1 top-[52px] left-0 bg-[var(--gray)] rounded-[8px] w-full h-[165px] flex flex-col items-center gap-[17px] lg:top-[80px] lg:h-[204px]">
          <h3 className="z-2 text-[15px] font-[var(--font-weight-bold)] text-[var(--black)] mt-[88px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mt-[116px]">
            HEADPHONES
          </h3>
          <Link
            href="/headphones"
            className="z-2 mb-[22px] flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
          >
            <span className="text-[13px] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
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
      <div className="relative w-full h-[217px] flex flex-col items-center lg:h-[284px]">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          width={84.04}
          height={101}
          alt="category: speakers"
          className="z-2 w-[150px] h-auto lg:w-[240px] lg:h-auto"
        ></Image>
        <div className="absolute z-1 top-[52px] left-0 bg-[var(--gray)] rounded-[8px] w-full h-[165px] flex flex-col items-center gap-[17px] lg:top-[80px] lg:h-[204px]">
          <h3 className="z-2 text-[15px] font-[var(--font-weight-bold)] text-[var(--black)] mt-[88px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mt-[116px]">
            SPEAKERS
          </h3>
          <Link
            href="/speakers"
            className="z-2 mb-[22px] flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
          >
            <span className="text-[13px] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
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
      <div className="relative w-full h-[217px] flex flex-col items-center lg:h-[284px]">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          width={103}
          height={104}
          alt="category: earphones"
          className="z-2 w-[175px] h-auto lg:w-[260px] lg:h-auto"
        ></Image>
        <div className="absolute z-1 top-[52px] left-0 bg-[var(--gray)] rounded-[8px] w-full h-[165px] flex flex-col items-center gap-[17px] lg:top-[80px] lg:h-[204px]">
          <h3 className="z-2 text-[15px] font-[var(--font-weight-bold)] text-[var(--black)] mt-[88px] lg:text-[18px] lg:leading-[var(--line-height-bold-18)] lg:mt-[116px]">
            EARPHONES
          </h3>
          <Link
            href="/earphones"
            className="z-2 mb-[22px] flex flex-row justify-center items-center gap-[13.32px] cursor-pointer shop-link"
          >
            <span className="text-[13px] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--black)] opacity-50 hover:text-[var(--dark-orange)] hover:opacity-100">
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
    </div>
  );
};

export default Categories;
