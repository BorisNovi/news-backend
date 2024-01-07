import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: `User's role` })
  readonly value: string;
  @ApiProperty({ example: '1', description: 'User id' })
  readonly userId: number;
}
