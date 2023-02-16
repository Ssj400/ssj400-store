import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly brandname: string;

  @IsString()
  @IsNotEmpty()
  readonly slogan: string;

  @IsUrl()
  @IsNotEmpty()
  readonly logo: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
