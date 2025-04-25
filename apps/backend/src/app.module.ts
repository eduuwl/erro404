// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroController } from './Controller/registro.controller';
import { UsuarioController } from './Controller/usuario.controller';
import { RegistroService } from './Service/registro.service';
import { UsuarioService } from './Service/usuario.service';
import { Registro } from './Entity/registro.entity';
import { Usuario } from './Entity/usuario.entity';

@Module({
  imports: [
    // carrega variáveis de .env automaticamente
    ConfigModule.forRoot({ isGlobal: true }),

    // conecta ao Postgres direto via process.env, sem cfg.get()
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Registro, Usuario],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Registro, Usuario]),
  ],
  controllers: [RegistroController, UsuarioController],
  providers: [RegistroService, UsuarioService],
})
export class AppModule {}
