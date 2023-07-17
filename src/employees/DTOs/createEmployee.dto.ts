import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeeDTO {
  @IsString({ message: 'Please provide first Name as string' })
  @IsNotEmpty({ message: 'Please provide first name' })
  @ApiProperty({
    description: 'first name',
    example: 'Example Employee',
  })
  firstName: string;

  @IsString({ message: 'Please provide surname of employee as a string' })
  @IsNotEmpty({ message: 'Please provide surname of employee of employee' })
  @ApiProperty({
    description: 'surname of employee ',
    example: 'surname of employee',
  })
  surName: string;

  @IsString({
    message: 'Please provide employeeNo as string',
  })
  @IsNotEmpty({ message: 'Please provide employeeNo ' })
  @ApiProperty({
    description: 'Employee Number',
    example: 'EI-112-44-55',
  })
  employeeNo: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Please provide email of employee' })
  @ApiProperty({
    description: 'Employee email',
    example: 'employee@gmail.com',
  })
  email: string;

  @IsString({
    message: 'Please provide phone number of employee as string',
  })
  @IsNotEmpty({ message: 'Please provide phone number' })
  @ApiProperty({
    description: 'Employee phone number',
  })
  phoneNumber: string;

  @IsString({
    message: 'Please provide employment type as string',
  })
  @IsNotEmpty({ message: 'Please provide employment type' })
  @ApiProperty({
    description: 'type of employment ',
    example: 'part-time',
  })
  employmentType: string;

  @IsString({ message: 'Please provide status of employee as a string' })
  @IsNotEmpty({ message: 'Please provide status of employee' })
  @ApiProperty({
    description: 'current employment status',
    example: 'permanent',
  })
  employmentStatus: string;

  @IsString({
    message: 'provide site ID where employee works',
  })
  @ApiProperty({
    description: 'site id where employee works.',
    required: true,
  })
  siteId: string;

  @IsString({
    message: 'provide department ID where employee works',
  })
  @ApiProperty({
    description: 'department id where employee works.',
    required: true,
  })
  departmentId: string;

  @IsOptional({
    message: 'requestedDocs',
  })
  @IsArray()
  @ApiProperty()
  requestedDocs: string[];

  @IsNotEmpty({
    message: 'timeframe in which they are required',
  })
  @IsString({
    message: 'the required time frame must be provided as as tring',
  })
  @ApiProperty()
  requiredWithin: string;

  @IsNotEmpty({
    message: 'Please provide roleId ',
  })
  @ApiProperty({
    description: 'roleId of the role that user works as ',
  })
  roleId: string;

  @IsNotEmpty({ message: 'Please provide contractorId' })
  @ApiProperty({
    description: 'contractor Id which has employed this user.',
  })
  contractorId: string;
}
