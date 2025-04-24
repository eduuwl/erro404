import { Module } from '@nestjs/common';
import { RegistroController } from '../Controller/registro.controller';
import { RegistroService } from '../Service/registro.service';

@Module({
  controllers: [RegistroController],
  providers: [RegistroService]
})
export class RegistroModule {}
