-- CreateTable
CREATE TABLE "Projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Projetos_pkey" PRIMARY KEY ("id")
);
