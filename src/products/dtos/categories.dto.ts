import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly categoryName: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
