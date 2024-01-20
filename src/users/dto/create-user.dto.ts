import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.com', description: 'E-Mail' })
  @IsString({ message: 'Email should be string!' })
  @IsEmail({}, { message: 'Invalid email!' })
  readonly email: string;
  @ApiProperty({ example: 'pAs5w0rd', description: 'Password' })
  @IsString({ message: 'Password should be string!' })
  @Length(6, 20, { message: 'Password length shold be beetween 6 and 20!' })
  readonly password: string;
}
