import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateAssetRegisterDto {
  @IsNotEmpty({
    message: 'Asset No must be provided',
  })
  @IsString({
    message: 'Asset No must be provided as string',
  })
  @ApiProperty({
    description: 'Asset No',
  })
  assetNo: string;

  @IsNotEmpty({
    message: 'Make must be provided',
  })
  @IsString({
    message: 'Make must be provided as string',
  })
  @ApiProperty({
    description: 'Make',
  })
  make: string;

  @IsNotEmpty({
    message: 'Model must be provided',
  })
  @IsString({
    message: 'Model must be provided as string',
  })
  @ApiProperty({
    description: 'Model',
  })
  model: string;

  @IsNotEmpty({
    message: 'Serial Number must be provided',
  })
  @IsString({
    message: 'Serial Number must be provided as string',
  })
  @ApiProperty({
    description: 'Serial Number',
  })
  serialNumber: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Year of Manufacturer',
    example: '2022-01-01',
  })
  yearOfManufacturer: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Date Installed',
    example: '2022-01-01',
  })
  dateInstalled: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Date Commissioned',
    example: '2022-01-01',
  })
  dateCommissioned: string;

  @IsOptional()
  @IsString({
    message: 'Required Training must be provided as string',
  })
  @ApiProperty({
    description: 'Required Training',
  })
  requiredTraining?: string;

  @ApiProperty({
    description: 'Add Documents',
    type: 'string',
    format: 'binary',
  })
  addDocuments: any; // Change the type as per your requirements

  @IsBoolean()
  @ApiProperty({
    description: 'Risk Assessment Required',
  })
  riskAssessmentRequired: boolean;

  @IsNotEmpty({
    message: 'Internal Inspection Frequency must be provided',
  })
  @IsString({
    message: 'Internal Inspection Frequency must be provided as string',
  })
  @ApiProperty({
    description: 'Internal Inspection Frequency',
  })
  internalInspectionFrequency: string;

  @IsNotEmpty({
    message: 'Statutory Inspection must be provided',
  })
  @IsString({
    message: 'Statutory Inspection must be provided as string',
  })
  @ApiProperty({
    description: 'Statutory Inspection',
  })
  statutoryInspection: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Date of Statutory Inspection',
    example: '2022-01-01',
  })
  dateOfStatutoryInspection: string;

  @ApiProperty({
    description: 'Internal Inspection Form',
    type: 'string',
    format: 'binary',
  })
  internalInspectionForm: any; // Change the type as per your requirements
}
