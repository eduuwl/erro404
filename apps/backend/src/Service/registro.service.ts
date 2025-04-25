import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from '../DTOModule/create-registro.dto';

@Injectable()
export class RegistroService {
  private registros: CreateRegistroDto[] = []; 

  create(dto: CreateRegistroDto) {
    this.registros.push(dto);
    return dto;
  }
}