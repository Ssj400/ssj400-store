import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  MinLength,
  MaxLength,
  Max,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly customerName: string;

  @IsString()
  @IsNotEmpty()
  readonly customerLastName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
