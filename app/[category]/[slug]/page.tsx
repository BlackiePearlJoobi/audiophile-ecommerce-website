import React from "react";
import type { Prisma } from "../../generated/prisma";
import { getProduct, generateStaticSlugParams } from "../../prisma-db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Product = Prisma.ProductGetPayload<{
  include: {
    category: true;
    image: true;
    gallery: true;
    includes: true;
    others: true;
  };
}>;

const ProductPage = async ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  // URL validation
  const validParams = await generateStaticSlugParams();
  // check whether any pair in validParams matches both the category and slug from params
  const isValid = validParams.some(
    (pair) => pair.category === params.category && pair.slug === params.slug,
  );

  if (!isValid) {
    notFound();
  }

  const product: Product = (await getProduct(params.slug)) ?? notFound();

  return (
    <main className="mx-[24px] mt-[16px] flex flex-col items-center justify-between">
      <Link
        href={`/${product.category.name}`}
        className="text-[15px] leading-[var(--line-height-medium-15)] tracking-[var(--letter-spacing-medium-15)] font-[var(--font-weight-medium)] text-[var(--black)]/50 self-start mb-[24px]"
      >
        Go Back
      </Link>
      <section className="flex flex-col items-center justify-between gap-[24px]">
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
              width={689}
              height={352}
            ></source>
            <Image
              src={product.image.mobile}
              width={327}
              height={327}
              alt="category image"
              className="w-full rounded-[8px] object-cover sm:w-[689px] sm:h-[352px] lg:w-auto lg:h-auto"
            ></Image>
          </picture>
        )}
      </section>
    </main>
  );
};

export default ProductPage;
