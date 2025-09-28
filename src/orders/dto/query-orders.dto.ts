import { IsString, IsOptional, IsIn } from 'class-validator';

export class QueryOrdersDto {
  @IsString({ message: 'El source debe ser un texto' })
  @IsOptional()
  source?: string;

  @IsString()
  @IsOptional()
  @IsIn(['present', 'absent'], {
    message: 'El valor para bridge solo puede ser "present" o "absent"',
  })
  bridge?: string;
}