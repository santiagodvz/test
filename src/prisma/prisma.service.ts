import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient(); // Inicializa el cliente de Prisma
  }

  // Agrega métodos adicionales según sea necesario para interactuar con tu base de datos
}