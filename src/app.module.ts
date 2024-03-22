import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service'; // Importa el servicio de Prisma

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService], // Agrega el servicio de Prisma a la lista de proveedores
})
export class AppModule {}