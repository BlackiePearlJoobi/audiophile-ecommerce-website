import React from "react";
import Image from "next/image";

const BestGear = () => {
  return (
    <section className="mx-[24px] mb-[120px] flex flex-col gap-[40px] sm:mx-[40px] sm:my-[96px] sm:gap-[63px] lg:mx-[165px] lg:my-[200px] xl:flex-row-reverse xl:gap-[125px]">
      <picture>
        <source
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1280px)"
          width={540}
          height={588}
        ></source>
        <source
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 640px)"
          width={689}
          height={300}
        ></source>
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          width={327}
          height={300}
          alt="A person wearing audiophile's headphones"
          className="w-full h-full rounded-[8px] object-cover sm:max-h-[300px] xl:min-w-[540px] xl:max-h-[588px]"
        ></Image>
      </picture>
      <div className="flex flex-col text-center justify-center gap-[32px] sm:mx-[58px] xl:text-start xl:mx-0">
        <h2 className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[var(--letter-spacing-bold-28)] font-[var(--font-weight-bold)] text-[var(--black)] sm:text-[40px] sm:leading-[var(--line-height-bold-40)] sm:tracking-[var(--letter-spacing-bold-40)]">
          BRINGING YOU THE{" "}
          <span className="text-[var(--dark-orange)]">BEST</span> AUDIO GEAR
        </h2>
        <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)] opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestGear;
