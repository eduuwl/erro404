import { Controller, Post, Body } from '@nestjs/common';
import { RegistroService } from '../Service/registro.service';
import { CreateRegistroDto } from '../DTOModule/create-registro.dto';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  create(@Body() dto: CreateRegistroDto) {
    return this.registroService.create(dto);
  }
}