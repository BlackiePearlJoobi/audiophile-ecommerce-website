-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "new" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "ProductImage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoryImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "CategoryImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstId" INTEGER NOT NULL,
    "secondId" INTEGER NOT NULL,
    "thirdId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Gallery_firstId_fkey" FOREIGN KEY ("firstId") REFERENCES "GallerySet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Gallery_secondId_fkey" FOREIGN KEY ("secondId") REFERENCES "GallerySet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Gallery_thirdId_fkey" FOREIGN KEY ("thirdId") REFERENCES "GallerySet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Gallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GallerySet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "IncludeItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "IncludeItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RelatedProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "tablet" TEXT NOT NULL,
    "desktop" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "RelatedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "products_imageId_key" ON "products"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryImage_productId_key" ON "CategoryImage"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_firstId_key" ON "Gallery"("firstId");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_secondId_key" ON "Gallery"("secondId");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_thirdId_key" ON "Gallery"("thirdId");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_productId_key" ON "Gallery"("productId");
