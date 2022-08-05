-- CreateTable
CREATE TABLE "URL" (
    "id" STRING NOT NULL,
    "url" STRING NOT NULL,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "URL_id_key" ON "URL"("id");
