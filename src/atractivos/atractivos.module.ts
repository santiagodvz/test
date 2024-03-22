import { Module } from '@nestjs/common';
import { AtractivosService } from './atractivos.service';
import { AtractivosController } from './atractivos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AtractivosController],
  providers: [AtractivosService],
  imports: [PrismaModule],
})
export class AtractivosModule {}
