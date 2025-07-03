"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import Cart from "./Cart";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 h-[89px] px-[24px] py-[32px] ${isHome ? "bg-[#191919]" : "bg-[var(--black)]"} flex flex-row items-center justify-between sm:px-[40px] sm:justify-start lg:px-[165px]`}
    >
      <div className="lg:hidden">
        <MobileMenu></MobileMenu>
      </div>
      <Link href="/" className="z-10 sm:ml-[42px] lg:ml-0">
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={143}
          height={25}
          alt="company logo"
        ></Image>
      </Link>
      <div className="hidden absolute left-[60px] w-[calc(100%-60px)] lg:block xl:left-0">
        <Nav></Nav>
      </div>
      <Cart></Cart>
    </header>
  );
};

export default Header;
