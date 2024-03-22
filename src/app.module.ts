import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service'; // Importa el servicio de Prisma
import { PrismaModule } from './prisma/prisma.module';
import { AtractivosModule } from './atractivos/atractivos.module';

@Module({
  imports: [PrismaModule, AtractivosModule],
  controllers: [],
  providers: [PrismaService], // Agrega el servicio de Prisma a la lista de proveedores
})
export class AppModule {}