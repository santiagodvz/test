import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Atractivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: string;

  @Column()
  descripcion: string;

  @Column()
  descripcion2: string;

  @Column()
  dias_abiertos: string;

  @Column()
  direccion: string;

  @Column()
  facebook: string;

  @Column("text", { array: true })
  fotos: string[];

  @Column()
  horarios: string;

  @Column()
  horarios2: string;

  @Column()
  instagram: string;

  @Column()
  isVisible: boolean;

  @Column()
  nombre: string;

  @Column()
  nombre2: string;

  @Column()
  popular: boolean;

  @Column()
  precio: number;

  @Column()
  precio2: number;

  @Column()
  region: string;

  @Column("text", { array: true })
  tags: string[];

  @Column()
  telefono: string;

  @Column()
  tripadvisor: string;

  @Column()
  ubicacion: string;

  @Column()
  whatsapp: string;
}
