"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Categories from "./Categories";

const MobileMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpened]);

  // close the mobile menu when a user clicks on any element with the .shop-link class (SHOP button)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // target the closets ancestor that has the .shop-link class, letting the click originate from nested tags like <span> inside a <Link>, as long as an ancestor has the .shop-link class.
      if (target.closest(".shop-link")) {
        setIsMenuOpened(false);
      }
    };

    document.addEventListener("click", handleClick);

    // remove the listener when the component unmounts to prevent memory leaks (since the event listener lives outside React’s component system, even if the component unmounts (like when the user navigates away), that listener will still exist)
    // in useEffect, return means “run this later, when the component is about to unmount or the effect is re-run.”
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <button
        type="button"
        className="lg:hidden cursor-pointer"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          alt="hamburger button icon"
        ></Image>
      </button>
      <div
        className={`fixed z-20 top-[89px] left-0 w-full h-[calc(100svh-89px)] overflow-auto transition-opacity duration-500
    ${isMenuOpened ? "bg-[var(--black)]/40 opacity-100" : "opacity-0 pointer-events-none"}
      `}
      >
        <div
          className={`absolute top-0 left-0 w-full pt-[32px] pb-[35px] bg-[var(--white)] overflow-hidden transition-[max-height] duration-500 ease-in-out ${isMenuOpened ? "max-h-[750px]" : "max-h-0"} sm:pt-[56px] sm:pb-[67px]`}
        >
          <Categories></Categories>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
