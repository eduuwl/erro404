import { Module } from '@nestjs/common';
import { RegistroController } from './Controller/registro.controller';
import { UsuarioController } from './Controller/usuario.controller';
import { RegistroService } from './Service/registro.service';
import { UsuarioService } from './Service/usuario.service';

@Module({
  imports: [],
  controllers: [RegistroController, UsuarioController],
  providers: [RegistroService, UsuarioService],
})
export class AppModule {}