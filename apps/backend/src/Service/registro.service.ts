// src/Service/registro.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistroDto } from '../DTOModule/create-registro.dto';
import { Registro } from '../Entity/registro.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly repo: Repository<Registro>,
  ) {}

  async create(dto: CreateRegistroDto): Promise<Registro> {
    const registro = this.repo.create(dto);
    return this.repo.save(registro);
  }

  async findAll(): Promise<Registro[]> {
    return this.repo.find();
  }
}
