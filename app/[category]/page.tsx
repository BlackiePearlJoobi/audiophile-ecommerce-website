import React from "react";
import type { Prisma } from "../generated/prisma";
import { getProducts, generateStaticParams } from "../prisma-db";
import { notFound } from "next/navigation";
import Image from "next/image";

type Product = Prisma.ProductGetPayload<{
  include: {
    category: true;
    categoryImage: true;
  };
}>;

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  // validate the category in URL
  const validParams = await generateStaticParams();
  // it will generate an array like:
  /* [
    { category: "headphones" },
    { category: "speakers" },
    { category: "earphones" }
  ] */
  const validCategories = validParams.map((param) => param.category);

  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const products: Product[] = await getProducts();

  return (
    <ul className="space-y-4">
      {products
        .filter((product) => product.category.name === params.category)
        .map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            {product.categoryImage && (
              <Image
                src={product.categoryImage.mobile}
                width={327}
                height={352}
                alt="category image"
              ></Image>
            )}
          </li>
        ))}
    </ul>
  );
};

export default CategoryPage;
