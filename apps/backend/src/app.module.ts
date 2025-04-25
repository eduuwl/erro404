import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importando TypeOrmModule
import { RegistroController } from './Controller/registro.controller';
import { UsuarioController } from './Controller/usuario.controller';
import { RegistroService } from './Service/registro.service';
import { UsuarioService } from './Service/usuario.service';
import { Registro } from './Entity/registro.entity'; 
import { Usuario } from './Entity/usuario.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Windows',
      password: '0000',
      database: 'resíduos',
      entities: [Registro, Usuario], // Adicionando as entidades Registro e Usuario
      synchronize: true, // Lembre-se de que isso cria as tabelas automaticamente
    }),
    TypeOrmModule.forFeature([Registro, Usuario]), // Adicionando os módulos para Registro e Usuario
  ],
  controllers: [RegistroController, UsuarioController], // Incluindo o controlador de usuário
  providers: [RegistroService, UsuarioService], // Incluindo o serviço de usuário
})
export class AppModule {}