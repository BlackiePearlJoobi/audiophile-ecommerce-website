import { PrismaClient } from "../app/generated/prisma/index.js";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const raw = readFileSync(join(__dirname, "../app/data.json"), "utf-8");
const products = JSON.parse(raw);
const prisma = new PrismaClient();

async function seedProducts() {
  const existing = await prisma.product.findFirst();
  if (existing) {
    console.log("Products already seeded. Skipping...");
    return;
  }

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
          create: product.includes.map(
            (item: { quantity: number; item: string }) => ({
              quantity: item.quantity,
              item: item.item,
            }),
          ),
        },
        others: {
          create: product.others.map(
            (related: {
              slug: string;
              category: string;
              name: string;
              image: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            }) => ({
              slug: related.slug,
              category: related.category,
              name: related.name,
              mobile: related.image.mobile,
              tablet: related.image.tablet,
              desktop: related.image.desktop,
            }),
          ),
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
