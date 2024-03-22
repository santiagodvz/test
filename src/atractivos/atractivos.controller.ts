import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtractivosService } from './atractivos.service';
import { CreateAtractivoDto } from './dto/create-atractivo.dto';
import { UpdateAtractivoDto } from './dto/update-atractivo.dto';

@Controller('atractivos')
export class AtractivosController {
  constructor(private readonly atractivosService: AtractivosService) {}

 @Post()
  create(@Body() createAtractivoDto: CreateAtractivoDto) {
    return this.atractivosService.create(createAtractivoDto);
  } 

  @Get()
  findAll() {
    return this.atractivosService.getAllAtractivos();
  }

   @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atractivosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtractivoDto: UpdateAtractivoDto) {
    return this.atractivosService.update(+id, updateAtractivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atractivosService.remove(+id);
  } 
}
