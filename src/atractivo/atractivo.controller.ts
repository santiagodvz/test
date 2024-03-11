import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Atractivo } from './atractivo.entity';
import { AtractivoService } from './atractivo.service';

@Controller('atractivos')
export class AtractivoController {
  constructor(private readonly atractivoService: AtractivoService) {}

  @Get()
  async findAll(): Promise<Atractivo[]> {
    return await this.atractivoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Atractivo> {
    return await this.atractivoService.findOne(+id);
  }

  @Post()
  async create(@Body() atractivo: Atractivo): Promise<Atractivo> {
    return await this.atractivoService.create(atractivo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() atractivo: Atractivo): Promise<Atractivo> {
    return await this.atractivoService.update(+id, atractivo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.atractivoService.remove(+id);
  }
}
