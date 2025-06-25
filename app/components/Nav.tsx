import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ol className="flex flex-col justify-center items-center gap-[16px] sm:flex-row sm:gap-[34px]">
        <li>
          <Link
            href="/"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[2px] font-[var(--font-weight-bold)] text-[var(--white)]  hover:text-[var(--dark-orange)] cursor-pointer"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/headphones"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[2px] font-[var(--font-weight-bold)] text-[var(--white)]  hover:text-[var(--dark-orange)] cursor-pointer"
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link
            href="/speakers"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[2px] font-[var(--font-weight-bold)] text-[var(--white)]  hover:text-[var(--dark-orange)] cursor-pointer"
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            href="/earphones"
            className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[2px] font-[var(--font-weight-bold)] text-[var(--white)]  hover:text-[var(--dark-orange)] cursor-pointer"
          >
            EARPHONES
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
