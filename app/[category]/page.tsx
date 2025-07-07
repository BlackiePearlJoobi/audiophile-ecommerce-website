import React from "react";
import type { Prisma } from "../generated/prisma";
import { getProducts, generateStaticCategoryParams } from "../prisma-db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// define which relations to include
// fields like name, price, id, etc., are included automatically as part of the base Product model.
type Product = Prisma.ProductGetPayload<{
  include: {
    category: true;
    categoryImage: true;
  };
}>;

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  // URL validation
  const validParams = await generateStaticCategoryParams();
  // it will generate an array like:
  /* [
    { category: "headphones" },
    { category: "speakers" },
    { category: "earphones" }
  ] */
  const validCategories = validParams.map((param) => param.category);
  if (!validCategories.includes(category)) notFound();

  const products: Product[] = await getProducts();

  return (
    <>
      <div className="z-0 w-full h-[1px] bg-[var(--black)]">
        <hr className="z-1 w-full border-t border-[var(--white)]/10 mx-auto sm:w-[calc(100%-80px)] lg:w-[calc(100%-330px)]" />
      </div>
      <div className="w-full h-[102px] bg-[var(--black)] flex items-center justify-center sm:h-[246px] lg:h-[239px]">
        <h1 className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[var(--letter-spacing-bold-28)] font-[var(--font-weight-bold)] text-[var(--white)] uppercase sm:text-[40px] sm:leading-[var(--line-height-bold-40)] sm:tracking-[1.43px]">
          {category}
        </h1>
      </div>
      <ul className="mx-[24px] mt-[64px] flex flex-col items-center justify-center sm:mx-[40px] sm:mt-[120px] lg:mx-[165px] lg:mt-[160px]">
        {products
          .filter((product) => product.category.name === category)
          .map((product) => (
            <li
              key={product.id}
              role="region"
              aria-labelledby={`product-heading-${product.id}`}
              className="product-card mb-[120px] flex flex-col items-center justify-center gap-[32px] sm:gap-[52px] lg:mb-[160px] lg:flex-row lg:justify-between lg:gap-[125px]"
            >
              {product.categoryImage && (
                <picture>
                  <source
                    srcSet={product.categoryImage.desktop}
                    media="(min-width: 1024px)"
                    width={540}
                    height={560}
                  ></source>
                  <source
                    srcSet={product.categoryImage.tablet}
                    media="(min-width: 640px)"
                    width={689}
                    height={352}
                  ></source>
                  <Image
                    src={product.categoryImage.mobile}
                    width={327}
                    height={352}
                    alt="category image"
                    className="w-full rounded-[8px] object-cover sm:w-[689px] sm:h-[352px] lg:w-auto lg:h-auto"
                  ></Image>
                </picture>
              )}
              <article className="flex flex-col items-center justify-center gap-[24px] sm:mx-[58px] sm:gap-[28px] lg:w-auto lg:mx-0 lg:items-start lg:gap-[32px]">
                {product.new && (
                  <span className="text-[14px] leading-[var(--line-height-regular-14)] tracking-[var(--letter-spacing-regular-14)] font-[var(--font-weight-regular)] text-[var(--dark-orange)] sm:-mb-[12px] lg:-mb-[16px]">
                    NEW PRODUCT
                  </span>
                )}
                <h2
                  id={`product-heading-${product.id}`}
                  className="text-[28px] leading-[var(--line-height-bold-28)] tracking-[1px] font-[var(--font-weight-bold)] text-[var(--black)] px-[64px] text-center uppercase sm:text-[40px] sm:leading-[var(--line-height-bold-40)] sm:tracking-[1.43px] lg:text-start lg:px-0"
                >
                  {product.name}
                </h2>
                <p className="text-[15px] leading-[var(--line-height-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 text-center lg:text-start lg:mb-[4px]">
                  {product.description}
                </p>
                <Link
                  href={`/${product.category.name}/${product.slug}`}
                  className="text-[13px] leading-[var(--line-height-bold-13)] tracking-[var(--letter-spacing-bold-13)] font-[var(--font-weight-bold)] text-[var(--white)] bg-[var(--dark-orange)] hover:bg-[var(--orange)] w-[160px] h-[48px] flex items-center justify-center"
                >
                  SEE PRODUCT
                </Link>
              </article>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryPage;
