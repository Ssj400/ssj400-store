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
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly gmail: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
