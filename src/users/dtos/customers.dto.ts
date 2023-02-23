import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
  //Se le puede agregar una descripcion
  @ApiProperty({ description: 'El nombre del customer' })
  @IsString()
  @IsNotEmpty()
  readonly customerName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly customerLastName: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
