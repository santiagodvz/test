import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atractivo } from './atractivo.entity';

@Injectable()
export class AtractivoService {
  constructor(
    @InjectRepository(Atractivo)
    private readonly atractivoRepository: Repository<Atractivo>,
  ) {}

  async findAll(): Promise<Atractivo[]> {
    return await this.atractivoRepository.find();
  }

  async findOne(id: number): Promise<Atractivo> {
    return await this.atractivoRepository.findOne(id);
  }

  async create(atractivo: Atractivo): Promise<Atractivo> {
    return await this.atractivoRepository.save(atractivo);
  }

  async update(id: number, atractivo: Atractivo): Promise<Atractivo> {
    await this.atractivoRepository.update(id, atractivo);
    return await this.atractivoRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.atractivoRepository.delete(id);
  }
}
