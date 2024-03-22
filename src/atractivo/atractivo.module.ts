import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atractivo } from '../atractivo.entity';
import { AtractivoController } from './atractivo.controller';
import { AtractivoService } from './atractivo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Atractivo])],
  controllers: [AtractivoController],
  providers: [AtractivoService],
})
export class AtractivoModule {}
