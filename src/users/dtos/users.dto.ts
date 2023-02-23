import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly gmail: string;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
