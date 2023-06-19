import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContractorDTO {
  @IsString({ message: 'Please provide name of contractor as a string' })
  @IsNotEmpty({ message: 'Please provide name of contractor' })
  @ApiProperty({
    description: 'The name of the contractor',
    example: 'Example Contractor',
  })
  name: string;

  @IsString({ message: 'Please provide description of contractor as a string' })
  @IsNotEmpty({ message: 'Please provide description of contractor' })
  @ApiProperty({
    description: 'The description of the contractor',
  })
  description: string;

  @IsString({
    message: 'Please provide person in charge of contractor as a string',
  })
  @IsNotEmpty({ message: 'Please provide person in charge of contractor' })
  @ApiProperty({
    description: 'The person in charge of the contractor',
    example: 'John Doe',
  })
  personInCharge: string;

  @IsString({ message: 'Please provide role of contractor as a string' })
  @IsNotEmpty({ message: 'Please provide role of contractor' })
  @ApiProperty({
    description: 'The role of the contractor',
    example: 'Contractor Role',
  })
  role: string;

  @IsString({
    message: 'Please provide email of person in charge as a string',
  })
  @IsNotEmpty({ message: 'Please provide email of person in charge' })
  @ApiProperty({
    description: 'The email of the person in charge',
    example: 'john.doe@example.com',
  })
  personInChargeEmail: string;

  @IsString({
    message: 'Please provide phone number of person in charge as a string',
  })
  @IsNotEmpty({ message: 'Please provide phone number of person in charge' })
  @ApiProperty({
    description: 'The phone number of the person in charge',
    example: '123-456-7890',
  })
  personInChargePhone: string;

  @IsString({ message: 'Please provide address of contractor as a string' })
  @IsNotEmpty({ message: 'Please provide address of contractor' })
  @ApiProperty({
    description: 'The address of the contractor',
    example: '123 Main St, City, Country',
  })
  address: string;

  @ApiProperty({
    description: 'The VAT (Value Added Tax) of the contractor',
    example: '123456789',
    required: false,
  })
  @IsString({
    message: 'please provide VAT as astring',
  })
  VAT?: string;

  @IsNotEmpty({
    message: 'Please provide timeframe in which documents are required ',
  })
  @ApiProperty({
    description: 'Documents required within',
    example: '6 days or 1 month',
  })
  docsRequiredWithin: string;

  @IsNotEmpty({ message: 'Please provide requested documentation' })
  @IsString()
  @ApiProperty({
    description: 'Requested documentation',
  })
  requestedDocumentation: string;

  @IsString({
    message:
      'Please provide site id for contractor to be associated with as string',
  })
  @IsNotEmpty({
    message: 'Please provide site id for contractor to be associated with  ',
  })
  @ApiProperty({
    description: 'siteId',
  })
  siteId: string;
}
