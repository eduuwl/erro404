import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  getHello(): string {
    return 'Olá do serviço!';
  }
}