// apps/backend/src/DTOModule/create-usuario.dto.ts
import { IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;
}