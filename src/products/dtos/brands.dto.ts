import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateBrandDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly brandname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly slogan: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly logo: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
