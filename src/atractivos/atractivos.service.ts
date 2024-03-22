import { Injectable } from '@nestjs/common';
import { CreateAtractivoDto } from './dto/create-atractivo.dto';
import { UpdateAtractivoDto } from './dto/update-atractivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AtractivosService {
  constructor(private prisma: PrismaService) {}
  create(createAtractivoDto: CreateAtractivoDto) {
    return 'This action adds a new atractivo';
  } 

   getAllAtractivos(){
    return this.prisma.atractivo.findMany();
  }

   findOne(id: number) {
    return `This action returns a #${id} atractivo`;
  }

  update(id: number, updateAtractivoDto: UpdateAtractivoDto) {
    return `This action updates a #${id} atractivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} atractivo`;
  } 
}
