import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateDepartmentDTO {
  @IsOptional()
  @IsString({
    message: 'Department name must be a string',
  })
  @ApiProperty({
    description: 'The name of the department',
    example: 'Example Department',
  })
  name?: string;

  @IsOptional()
  @IsString({
    message: 'Phone number must be a string',
  })
  @ApiProperty({
    description: 'The phone number of the department',
    example: '123-456-7890',
  })
  phoneNumber?: string;

  @IsOptional()
  @IsString({
    message: 'Extension number must be a string',
  })
  @ApiProperty({
    description: 'The extension number of the department',
    example: '1234',
  })
  extensionNumber?: string;

  @IsOptional()
  @IsString({
    message: 'Site ID must be a string',
  })
  @ApiProperty({
    description: 'The ID of the site to link the department',
    example: '1234567890',
  })
  siteId?: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    description: 'create a risk assessment site',
  })
  deptRiskAssessmentIds: string[];
}
