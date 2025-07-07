import React from "react";
import { getProduct, generateStaticSlugParams } from "../../prisma-db";
import { notFound } from "next/navigation";
import type { Product, CartItem } from "@/app/types/definitions";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/components/AddToCartButton";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) => {
  try {
    const { category, slug } = await params;

    // URL validation
    const validParams = await generateStaticSlugParams();
    // check whether any pair in validParams matches both the category and slug from params
    const isValid = validParams.some(
      (pair) => pair.category === category && pair.slug === slug,
    );
    if (!isValid) notFound();

    const product: Product = (await getProduct(slug)) ?? notFound();
    const cartInfo: CartItem = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      amount: 0,
    };

    return (
      <>
        <Link
          href={`/${product.category.name}`}
          className="text-[15px] leading-[var(--line-height-medium-15)] tracking-[var(--letter-spacing-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 self-start mx-[24px] mt-[16px] mb-[24px] hover:text-[var(--dark-orange)] sm:mx-[40px] sm:mt-[33px] lg:mx-[165px] lg:mt-[79px] lg:mb-[56px]"
        >
          Go Back
        </Link>
        <main className="mx-[24px] mb-[120px] flex flex-col gap-[88px] sm:mx-[40px] sm:gap-[120px] lg:mx-[165px] lg:gap-[160px]">
          <section className="flex flex-col items-center justify-between gap-[32px] sm:flex-row sm:gap-[69px] lg:gap-[124px]">
            {product.image && (
              <picture>
                <source
                  srcSet={product.image.desktop}
                  media="(min-width: 1024px)"
                  width={540}
                  height={560}
                ></source>
                <source
                  srcSet={product.image.tablet}
                  media="(min-width: 640px)"
                  width={281}
                  height={480}
                ></source>
                <Image
                  src={product.image.mobile}
                  width={327}
                  height={327}
                  alt="category image"
                  className="w-full sm:max-h-[480px] rounded-[8px] object-cover"
                ></Image>
              </picture>
            )}
            <article className="flex flex-col justify-between gap-[24px] sm:flex-1 sm:gap-[32px] lg:min-w-[40%]">
              {product.new && (
                <span className="text-[14px] leading-[var(--line-height-regular-14)] tracking-[var(--letter-spacing-regular-14)] font-[var(--font-weight-regular)] text-[var(--dark-orange)] sm:text-[12px] sm:tracking-[8.57px] sm:-mb-[15px]">
                  NEW PRODUCT
                </span>
              )}
              <h1 className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[1px] font-[var(--font-weight-bold)] text-[var(--black)] uppercase sm:leading-[32px] lg:text-[40px] lg:leading-[var(--line-height-bold-40)] lg:tracking-[1.43px]">
                {product.name}
              </h1>
              <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50">
                {product.description}
              </p>
              <span className="text-[18px] leading-[var(--line-height-bold-18)] tracking-[var(--letter-spacing-bold-18)] font-[var(--font-weight-bold)] text-[var(--black)]">
                $ {product.price.toLocaleString("en-US")}
              </span>
              <AddToCartButton product={cartInfo}></AddToCartButton>
            </article>
          </section>
          <div className="flex flex-col gap-[88px] sm:gap-[120px] xl:flex-row xl:gap-[125px]">
            <section className="flex flex-col">
              <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-[var(--font-weight-bold)] text-[var(--black)] mb-[24px] sm:text-[32px] sm:tracking-[var(--letter-spacing-bold-32)] sm:mb-[32px]">
                FEATURES
              </h2>
              {product.features.split("\n").map((line, i) => {
                return (
                  <p
                    key={i}
                    className="text-[15px] leading-[var(--line-height-medium-15)] tracking-[var(--letter-spacing-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50"
                  >
                    {line}
                    <br></br>
                  </p>
                );
              })}
            </section>
            <section className="flex flex-col gap-[24px] sm:flex-row sm:gap-[11px] xl:flex-col xl:gap-[32px]">
              <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-[var(--font-weight-bold)] text-[var(--black)] sm:text-[32px] sm:tracking-[var(--letter-spacing-bold-32)] sm:w-[339px]">
                IN THE BOX
              </h2>
              <ol className="flex flex-col gap-[8px] sm:w-[199px] lg:w-[225px]">
                {product.includes.map((accessory) => {
                  return (
                    <li key={accessory.item} className="relative">
                      <span className="text-[15px] leading-[var(--line-height-bold-15)] font-[var(--font-weight-bold)] text-[var(--dark-orange)]">
                        {accessory.quantity}x
                      </span>
                      <span className="absolute left-[39px] text-[15px] leading-[var(--line-height-medium-15)] tracking-[var(--letter-spacing-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50">
                        {accessory.item}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </section>
          </div>
          <section>
            <h2 className="sr-only">GALLERY</h2>
            {product.gallery && (
              <div className="flex flex-col gap-[20px] sm:flex-row sm:gap-[18px] lg:gap-[30px]">
                <div className="flex flex-col gap-[20px] lg:gap-[32px]">
                  <picture>
                    <source
                      srcSet={product.gallery.first.desktop}
                      media="(min-width: 1024px)"
                      width={445}
                      height={280}
                    ></source>
                    <source
                      srcSet={product.gallery.first.tablet}
                      media="(min-width: 640px)"
                      width={227}
                      height={174}
                    ></source>
                    <Image
                      src={product.gallery.first.mobile}
                      width={327}
                      height={174}
                      alt={`The first gerally image of ${product.name}`}
                      className="w-full h-auto rounded-[8px] object-cover sm:h-[174px] lg:h-[280px]"
                    ></Image>
                  </picture>
                  <picture>
                    <source
                      srcSet={product.gallery.second.desktop}
                      media="(min-width: 1024px)"
                      width={445}
                      height={280}
                    ></source>
                    <source
                      srcSet={product.gallery.second.tablet}
                      media="(min-width: 640px)"
                      width={227}
                      height={174}
                    ></source>
                    <Image
                      src={product.gallery.second.mobile}
                      width={327}
                      height={174}
                      alt={`The second gerally image of ${product.name}`}
                      className="w-full h-auto rounded-[8px] object-cover sm:h-[174px] lg:h-[280px]"
                    ></Image>
                  </picture>
                </div>
                <picture>
                  <source
                    srcSet={product.gallery.third.desktop}
                    media="(min-width: 1024px)"
                    width={635}
                    height={592}
                  ></source>
                  <source
                    srcSet={product.gallery.third.tablet}
                    media="(min-width: 640px)"
                    width={395}
                    height={368}
                  ></source>
                  <Image
                    src={product.gallery.third.mobile}
                    width={327}
                    height={174}
                    alt={`The third gerally image of ${product.name}`}
                    className="w-full h-auto rounded-[8px] object-cover sm:h-[368px] lg:h-[592px]"
                  ></Image>
                </picture>
              </div>
            )}
          </section>
          <section>
            <h3 className="text-[24px] leading-[36px] tracking-[0.86px] font-[var(--font-weight-bold)] text-[var(--black)] mb-[40px] sm:text-[32px] sm:tracking-[var(--letter-spacing-bold-32)] sm:text-center sm:mb-[56px] lg:mb-[64px]">
              YOU MAY ALSO LIKE
            </h3>
            <div className="flex flex-col items-center gap-[56px] sm:flex-row sm:gap-[11px] lg:gap-[30px]">
              {product.others.map((other) => {
                return (
                  <div
                    key={other.slug}
                    className="w-full flex flex-col items-center gap-[32px]"
                  >
                    <picture>
                      <source
                        srcSet={other.desktop}
                        media="(min-width: 1024px)"
                        width={350}
                        height={318}
                      ></source>
                      <source
                        srcSet={other.tablet}
                        media="(min-width: 640px)"
                        width={223}
                        height={318}
                      ></source>
                      <Image
                        src={other.mobile}
                        width={327}
                        height={120}
                        alt={other.name}
                        className="w-full rounded-[8px]"
                      ></Image>
                    </picture>
                    <h4 className="text-[24px] leading-[var(--line-height-bold-24)] tracking-[var(--letter-spacing-bold-24)] font-[var(--font-weight-bold)] text-[var(--black)] uppercase sm:mt-[8px]">
                      {other.name}
                    </h4>
                    <Link
                      href={`/${other.category}/${other.slug}`}
                      className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-[160px] h-[48px] flex items-center justify-center"
                    >
                      SEE PRODUCT
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error("Server render error:", error);
    throw error;
  }
};

export default ProductPage;
