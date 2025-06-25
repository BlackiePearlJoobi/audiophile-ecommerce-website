import { PrismaClient } from "../app/generated/prisma";
import products from "./data.json";

const prisma = new PrismaClient();

async function seedProducts() {
  for (const product of products) {
    await prisma.product.create({
      data: {
        slug: product.slug,
        name: product.name,
        new: product.new,
        price: product.price,
        description: product.description,
        features: product.features,
        category: {
          connectOrCreate: {
            where: { name: product.category },
            create: { name: product.category },
          },
        },
        image: {
          create: product.image,
        },
        categoryImage: {
          create: product.categoryImage,
        },
        gallery: {
          create: {
            first: { create: product.gallery.first },
            second: { create: product.gallery.second },
            third: { create: product.gallery.third },
          },
        },
        includes: {
          create: product.includes.map((item) => ({
            quantity: item.quantity,
            item: item.item,
          })),
        },
        others: {
          create: product.others.map((related) => ({
            slug: related.slug,
            name: related.name,
            mobile: related.image.mobile,
            tablet: related.image.tablet,
            desktop: related.image.desktop,
          })),
        },
      },
    });
  }
}

seedProducts()
  .then(() => {
    console.log("Seeding complete.");
    return prisma.$disconnect();
  })
  .catch((error) => {
    console.error("Error seeding:", error);
    return prisma.$disconnect();
  });

export async function getProducts() {
  return prisma.product.findMany({
    orderBy: [
      { price: "desc" }, // sort high to low first
      { new: "desc" }, // then place new products first
    ],
    include: {
      categoryImage: true,
      image: true,
      gallery: {
        include: {
          first: true,
          second: true,
          third: true,
        },
      },
      includes: true,
      others: true,
      category: true,
    },
  });
}

export async function getProduct(id: number) {
  return prisma.product.findUnique({
    where: { id },
  });
}

// for URL validation in app/[category]
export async function generateStaticParams() {
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
