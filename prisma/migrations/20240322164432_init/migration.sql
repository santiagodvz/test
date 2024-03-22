-- CreateTable
CREATE TABLE "Atractivo" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT,
    "descripcion" TEXT,
    "descripcion2" TEXT,
    "dias_abiertos" TEXT,
    "direccion" TEXT,
    "facebook" TEXT,
    "fotos" TEXT[],
    "horarios" TEXT,
    "horarios2" TEXT,
    "instagram" TEXT,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "nombre" TEXT,
    "nombre2" TEXT,
    "popular" BOOLEAN NOT NULL DEFAULT false,
    "precio" DOUBLE PRECISION,
    "precio2" DOUBLE PRECISION,
    "region" TEXT,
    "tags" TEXT[],
    "telefono" TEXT,
    "tripadvisor" TEXT,
    "ubicacion" TEXT,
    "whatsapp" TEXT,

    CONSTRAINT "Atractivo_pkey" PRIMARY KEY ("id")
);
