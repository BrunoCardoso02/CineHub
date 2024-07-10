-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "sinopse" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
