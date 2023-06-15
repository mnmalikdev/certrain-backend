import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateContractorDTO {
  @ApiProperty({
    description: 'The name of the contractor',
    example: 'Updated Contractor',
    required: false,
  })
  @IsString({
    message: 'Please provide the name of the contractor as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the name of the contractor' })
  name?: string;

  @ApiProperty({
    description: 'The description of the contractor',
    required: false,
  })
  @IsString({
    message: 'Please provide the description of the contractor as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the description of the contractor' })
  description?: string;

  @ApiProperty({
    description: 'The person in charge of the contractor',
    example: 'John Doe',
    required: false,
  })
  @IsString({
    message:
      'Please provide the person in charge of the contractor as a string',
  })
  @IsOptional()
  @IsNotEmpty({
    message: 'Please provide the person in charge of the contractor',
  })
  personInCharge?: string;

  @ApiProperty({
    description: 'The role of the contractor',
    example: 'Updated Contractor Role',
    required: false,
  })
  @IsString({
    message: 'Please provide the role of the contractor as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the role of the contractor' })
  role?: string;

  @ApiProperty({
    description: 'The email of the person in charge',
    example: 'john.doe@example.com',
    required: false,
  })
  @IsString({
    message: 'Please provide the email of the person in charge as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the email of the person in charge' })
  personInChargeEmail?: string;

  @ApiProperty({
    description: 'The phone number of the person in charge',
    example: '123-456-7890',
    required: false,
  })
  @IsString({
    message:
      'Please provide the phone number of the person in charge as a string',
  })
  @IsOptional()
  @IsNotEmpty({
    message: 'Please provide the phone number of the person in charge',
  })
  personInChargePhone?: string;

  @ApiProperty({
    description: 'The address of the contractor',
    example: '456 Main St, City, Country',
    required: false,
  })
  @IsString({
    message: 'Please provide the address of the contractor as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the address of the contractor' })
  address?: string;

  @ApiProperty({
    description: 'The VAT (Value Added Tax) of the contractor',
    example: '987654321',
    required: false,
  })
  @IsString({ message: 'Please provide the VAT as a string' })
  @IsOptional()
  VAT?: string;

  @ApiProperty({
    description: 'The documents required within',
    example: '7 days',
    required: false,
  })
  @IsString({
    message: 'Please provide the documents required within as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the documents required within' })
  docsRequiredWithin?: string;

  @ApiProperty({
    description: 'The requested documentation',
    type: [String],
    required: false,
  })
  @IsString({
    each: true,
    message: 'Please provide each requested documentation as a string',
  })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the requested documentation' })
  requestedDocumentation?: string[];

  @ApiProperty({
    description: 'The site ID to associate the contractor with',
    required: false,
  })
  @IsString({ message: 'Please provide the site ID as a string' })
  @IsOptional()
  @IsNotEmpty({ message: 'Please provide the site ID' })
  siteId?: string;
}
