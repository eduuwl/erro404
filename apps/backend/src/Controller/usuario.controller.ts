// apps/backend/src/Controller/usuario.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsuarioDto } from '../DTOModule/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  private usuarios: CreateUsuarioDto[] = [];

  @Post()
  criarUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    const novoUsuario = createUsuarioDto;
    this.usuarios.push(novoUsuario);

    return {
      mensagem: 'Usuário criado com sucesso!',
      usuario: novoUsuario,
    };
  }
}