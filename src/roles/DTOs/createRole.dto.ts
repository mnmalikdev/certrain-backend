// createRole.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDTO {
  @IsString({ message: 'Please provide name of role as a string' })
  @IsNotEmpty({ message: 'Please provide name of role ' })
  @ApiProperty({
    description: 'The name of the role',
    example: 'Example Role',
  })
  name: string;

  @IsString({ message: 'Please provide description of role as a string' })
  @IsNotEmpty({ message: 'Please provide description of role ' })
  @ApiProperty({
    description: 'The description of the role',
  })
  description: string;

  @IsString({
    message: 'Please provide site id for role to be associated with as string',
  })
  @IsOptional()
  @ApiProperty({
    description: 'siteId',
  })
  siteId: string;

  @IsString({
    message:
      'Please provide department id for role to be associated with as string',
  })
  @IsOptional()
  @ApiProperty({
    description: 'departmentId',
  })
  departmentId: string;

  @IsOptional()
  @ApiProperty({
    description: 'Responsibilities of the role',
  })
  responsibilities: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    description: 'create a risk assessment with role',
  })
  roleRiskAssessmentIds: string[];
}
