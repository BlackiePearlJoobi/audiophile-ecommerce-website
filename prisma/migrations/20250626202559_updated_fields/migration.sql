/*
  Warnings:

  - Added the required column `category` to the `RelatedProduct` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RelatedProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "RelatedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RelatedProduct" ("desktop", "id", "mobile", "name", "productId", "slug", "tablet") SELECT "desktop", "id", "mobile", "name", "productId", "slug", "tablet" FROM "RelatedProduct";
DROP TABLE "RelatedProduct";
ALTER TABLE "new_RelatedProduct" RENAME TO "RelatedProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
