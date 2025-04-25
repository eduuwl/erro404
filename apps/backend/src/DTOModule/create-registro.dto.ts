import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroDto {
  @ApiProperty({ description: 'Tipo de resíduo', example: 'Alumínio' })
  tipo: string;

  @ApiProperty({ description: 'Quantidade em Kg', example: 2.5 })
  quantidadeKg: number;

  @ApiProperty({ description: 'Turma', example: 'A' })
  turma: string;

  @ApiProperty({ description: 'Curso', example: 'ADS' })
  curso: string;

  @ApiProperty({ description: 'Semestre', example: '4' })
  semestre: string;

  @ApiProperty({ description: 'Turno', example: 'Noite' })
  turno: string;

  @ApiProperty({ description: 'Unidade (campus)', example: 'Unama Alcindo Cacela' })
  unidade: string;
}