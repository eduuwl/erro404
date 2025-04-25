import { Controller, Post, Body, Get } from '@nestjs/common';
import { RegistroService } from '../Service/registro.service';
import { CreateRegistroDto } from '../DTOModule/create-registro.dto';
import { Registro } from '../Entity/registro.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('registro')
@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Registro criado', type: Registro })
  async create(@Body() dto: CreateRegistroDto): Promise<Registro> {
    return this.registroService.create(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de registros', type: [Registro] })
  async findAll(): Promise<Registro[]> {
    return this.registroService.findAll();
  }
}