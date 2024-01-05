import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.com', description: 'E-Mail' })
  readonly email: string;
  @ApiProperty({ example: 'pAs5w0rd', description: 'Password' })
  readonly password: string;
}
