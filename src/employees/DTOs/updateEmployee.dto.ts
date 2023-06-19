import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDTO {
  @IsString({ message: 'Please provide first name as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'First name of the employee',
    example: 'John',
    required: false,
  })
  firstName?: string;

  @IsOptional({
    message: 'requestedDocs',
  })
  @IsString({ message: 'Please provide requested docs as a string' })
  @ApiProperty()
  requestedDocs: string;

  @IsOptional({
    message: 'timeframe in which they are required',
  })
  @IsString({
    message: 'the required time frame must be provided as as tring',
  })
  @ApiProperty()
  requiredWithin: string;

  @IsString({ message: 'Please provide surname as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'Surname of the employee',
    example: 'Doe',
    required: false,
  })
  surName?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    description: 'Email of the employee',
    example: 'john.doe@example.com',
    required: false,
  })
  email?: string;

  @IsString({ message: 'Please provide phone number as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'Phone number of the employee',
    example: '1234567890',
    required: false,
  })
  phoneNumber?: string;

  @IsString({
    message: 'Please provide employeeNo as string',
  })
  @ApiProperty({
    description: 'Employee Number',
    example: 'EI-112-44-55',
  })
  employeeNo: string;

  @IsString({ message: 'Please provide employment type as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'Type of employment',
    example: 'full-time',
    required: false,
  })
  employmentType?: string;

  @IsString({ message: 'Please provide employment status as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'Current employment status',
    example: 'permanent',
    required: false,
  })
  employmentStatus?: string;

  @IsString({ message: 'Please provide site ID as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'ID of the site where the employee works',
    example: 'site123',
    required: false,
  })
  siteId?: string;

  @IsString({ message: 'Please provide role ID as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'ID of the role that the employee has',
    example: 'role123',
    required: false,
  })
  roleId?: string;

  @IsString({ message: 'Please provide contractor ID as a string' })
  @IsOptional()
  @ApiProperty({
    description: 'ID of the contractor employing the employee',
    example: 'contractor123',
    required: false,
  })
  contractorId?: string;

  @IsString({
    message: 'provide department ID where employee works',
  })
  @IsOptional()
  @ApiProperty({
    description: 'department id where employee works.',
    required: false,
  })
  departmentId: string;
}

export class PartialUpdateEmployeeDTO extends PartialType(UpdateEmployeeDTO) {}
