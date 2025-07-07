import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

export async function getProducts() {
  return prisma.product.findMany({
    orderBy: [
      { price: "desc" }, // sort high to low first
      { new: "desc" }, // then place new products first
    ],
    include: {
      // define which relations to include
      category: true,
      categoryImage: true,
    },
  });
}

export async function getProduct(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
      image: true,
      gallery: {
        include: {
          first: true,
          second: true,
          third: true,
        },
      },
      includes: {
        select: {
          quantity: true,
          item: true,
        },
      },
      others: {
        select: {
          slug: true,
          category: true,
          name: true,
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
    },
  });
}

// for URL validation in app/[category]
export async function generateStaticCategoryParams() {
  // target the category table (model Category)
  // select only the name field (ignore id or other fields)
  // return an array like: [{ name: "headphones" }, { name: "speakers" }, { name: "earphones" }]
  const uniqueCategories = await prisma.category.findMany({
    select: { name: true },
  });

  /* transform the array into the shape Next.js expects for route generation: [
     { category: "headphones" },
     { category: "speakers" },
     { category: "earphones" }
   ]
  */
  return uniqueCategories.map(({ name }) => ({ category: name }));
}

// for URL validation in app/[category]/[slug]
export async function generateStaticSlugParams() {
  const products = await prisma.product.findMany({
    select: {
      slug: true,
      category: {
        select: { name: true },
      },
    },
  });

  return products.map(({ slug, category }) => ({
    category: category.name,
    slug,
  }));
}
