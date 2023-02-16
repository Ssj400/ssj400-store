import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly categoryName: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
