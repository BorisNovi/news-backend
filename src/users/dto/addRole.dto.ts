import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Role value should be string!' })
  @ApiProperty({ example: 'ADMIN', description: `User's role` })
  readonly value: string;
  @IsNumber({}, { message: 'User ID should be a number!' })
  @ApiProperty({ example: '1', description: 'User id' })
  readonly userId: number;
}
