import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
