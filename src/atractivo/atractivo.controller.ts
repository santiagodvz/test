// atractivo.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Importa tu servicio de Prisma

@Controller('atractivos')
export class AtractivoController {
  constructor(private readonly prismaService: PrismaService) {} // Inyecta el servicio de Prisma

  @Get()
  async findAll() {
    return await this.prismaService.atractivo.findMany(); // Método para obtener todos los atractivos
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.prismaService.atractivo.findUnique({ where: { id } }); // Método para obtener un atractivo por su ID
  }

  @Post()
  async create(@Body() data: any) {
    return await this.prismaService.atractivo.create({ data }); // Método para crear un nuevo atractivo
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any) {
    return await this.prismaService.atractivo.update({ where: { id }, data }); // Método para actualizar un atractivo
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.prismaService.atractivo.delete({ where: { id } }); // Método para eliminar un atractivo
  }
}
