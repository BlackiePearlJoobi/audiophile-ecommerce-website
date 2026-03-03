import { PrismaClient } from "../app/generated/prisma/index.js";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { readFileSync } from "node:fs";

/* 1. Reconstructing __dirname in an ES module */
const __dirname = fileURLToPath(new URL(".", import.meta.url));
// In ES modules, you must derive __dirname from the module’s URL
// import.meta.url → something like "file:///home/.../prisma/seed.ts"
// converts the current module’s URL (import.meta.url) to a file path
// returns "/home/blackiepearljoobi/frontendmentor/audiophile-ecommerce-website/prisma"

/* 2. Loading seed data */
const raw = readFileSync(join(__dirname, "../app/data.json"), "utf-8");
// reads the contents of ../app/data.json synchronously as UTF-8 text
// "join" part returns: "/home/blackiepearljoobi/frontendmentor/audiophile-ecommerce-website/app/data.json"
const products = JSON.parse(raw); // turns the JSON string into a real JavaScript array of product objects

/* 3. Connecting to DB */
const prisma = new PrismaClient(); // Prisma Client instance generated from schema.prisma, providing typed database access

/* 4. Defining the seeding function */
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
            // if a related record based on a where clause is found, it connects to it; otherwise, it creates a new record and connects to it automatically
            where: { name: product.category },
            create: { name: product.category }, // id is automatically created since schema uses: id Int @id @default(autoincrement())
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

/* 5. Executing the seeding */
seedProducts()
  .then(() => {
    console.log("Seeding complete.");
    return prisma.$disconnect(); // closes the DB connection (without it, Node keeps running)
  })
  .catch((error) => {
    console.error("Error seeding:", error);
    return prisma.$disconnect();
  });
