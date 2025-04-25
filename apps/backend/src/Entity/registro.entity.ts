// src/Entity/registro.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column('float')
  quantidadeKg: number;

  @Column()
  turma: string;

  @Column()
  curso: string;

  @Column()
  semestre: string;

  @Column()
  turno: string;

  @Column()
  unidade: string;
}