import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Footer = () => {
  return (
    <div className="bg-[var(--light-black)]">
      <footer className="relative max-w-[1400px] mx-auto px-[24px] pt-[52px] pb-[38px] flex flex-col justify-center items-center gap-[48px] sm:px-[40px] sm:pt-[60px] sm:items-start sm:gap-[32px] lg:px-[165px] lg:pt-[75px]">
        <hr className="absolute top-0 z-1 w-[101px] h-[4px] border-0 bg-[var(--dark-orange)] mx-auto sm:left-[40px] lg:left-[165px]" />
        <div className="flex flex-col gap-[48px] sm:gap-[32px] lg:w-full lg:flex-row lg:justify-between">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={143}
            height={25}
            alt="company logo"
            className="w-[143px] h-[25px]"
          ></Image>
          <Nav></Nav>
        </div>
        <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--white)] opacity-50 text-center sm:text-left lg:w-[50%] lg:mb-[24px]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="w-full flex flex-col items-center gap-[48px] sm:flex-row sm:justify-between sm:gap-0">
          <span className="text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--white)] opacity-50 text-center">
            Copyright 2025. All Rights Reserved
          </span>
          <div className="w-[104px] flex flex-row justify-between items-center gap-[16px] lg:-mt-[150px]">
            <Link href="https://www.facebook.com/frontendmentor">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                width={24}
                height={24}
                alt="facebook icon"
              ></Image>
            </Link>
            <Link href="https://x.com/frontendmentor">
              <Image
                src="/assets/shared/desktop/icon-x.svg"
                width={24}
                height={24}
                alt="x icon"
              ></Image>
            </Link>
            <Link href="https://discord.com/invite/UAfh3qzhYb">
              <Image
                src="/assets/shared/desktop/icon-discord.svg"
                width={24}
                height={24}
                alt="discord icon"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="text-[12px] text-[var(--white)] opacity-50 sm:text-[14px]">
          Challenge by&nbsp;
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="Learn more about challenges on frontendmentor.io"
            className="text-[#00bfff] hover:text-[var(--dark-orange)] visited:text-[#9370db]"
          >
            Frontend Mentor
          </Link>
          . Coded by&nbsp;
          <Link
            href="https://www.frontendmentor.io/profile/BlackiePearlJoobi"
            aria-label="Visit BlackiePearlJoobi's developer profile on frontendmentor.io"
            className="text-[#00bfff] hover:text-[var(--dark-orange)] visited:text-[#9370db]"
          >
            BlackiePearlJoobi
          </Link>
          .
        </div>
      </footer>
    </div>
  );
};

export default Footer;
