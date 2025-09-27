import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsIn,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  orderId: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['vtex', 'producteca'])
  source: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  storeId: string;

  @IsString()
  @IsOptional()
  @MaxLength(25)
  bridgeId?: string;

  @IsString()
  @IsOptional()
  @MaxLength(25)
  status?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  napseStatus?: string;

  @IsISO8601()
  @IsOptional()
  lastUpdated?: Date;

  @IsString()
  @IsOptional()
  creationDate?: string;
}