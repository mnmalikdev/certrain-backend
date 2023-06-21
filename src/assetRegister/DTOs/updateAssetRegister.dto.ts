import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsBooleanString,
  IsNotEmpty,
} from 'class-validator';
import { Express } from 'express';

export class UpdateAssetRegisterDto {
  @IsOptional()
  @IsString({ message: 'Asset No must be provided as string' })
  @ApiPropertyOptional({ description: 'Asset No' })
  assetNo?: string;

  @IsOptional()
  @IsString({ message: 'Make must be provided as string' })
  @ApiPropertyOptional({ description: 'Make' })
  make?: string;

  @IsOptional()
  @IsString({ message: 'Model must be provided as string' })
  @ApiPropertyOptional({ description: 'Model' })
  model?: string;

  @IsOptional()
  @IsString({ message: 'Serial Number must be provided as string' })
  @ApiPropertyOptional({ description: 'Serial Number' })
  serialNumber?: string;

  @IsOptional()
  @IsString({ message: 'Year of Manufacturer must be provided as string' })
  @ApiPropertyOptional({
    description: 'Year of Manufacturer',
    example: '2022-01-01',
  })
  yearOfManufacturer?: string;

  @IsOptional()
  @IsString({ message: 'Date Installed must be provided as string' })
  @ApiPropertyOptional({ description: 'Date Installed', example: '2022-01-01' })
  dateInstalled?: string;

  @IsOptional()
  @IsString({ message: 'Date Commissioned must be provided as string' })
  @ApiPropertyOptional({
    description: 'Date Commissioned',
    example: '2022-01-01',
  })
  dateCommissioned?: string;

  @IsOptional()
  @IsString({ message: 'Required Training must be provided as string' })
  @ApiPropertyOptional({ description: 'Required Training' })
  requiredTraining?: string;

  @IsOptional()
  @IsString({
    message: 'Internal Inspection Frequency must be provided as string',
  })
  @ApiPropertyOptional({ description: 'Internal Inspection Frequency' })
  internalInspectionFrequency?: string;

  @IsOptional()
  @IsString({ message: 'Statutory Inspection must be provided as string' })
  @ApiPropertyOptional({ description: 'Statutory Inspection' })
  statutoryInspection?: string;

  @IsOptional()
  @IsString({
    message: 'Date of Statutory Inspection must be provided as string',
  })
  @ApiPropertyOptional({
    description: 'Date of Statutory Inspection',
    example: '2022-01-01',
  })
  dateOfStatutoryInspection?: string;

  @IsOptional()
  @IsBooleanString({
    message: 'Risk Assessment Required must be a boolean value',
  })
  @ApiPropertyOptional({
    description: 'Risk Assessment Required',
    default: true,
  })
  riskAssessmentRequired?: boolean;
  @ApiPropertyOptional({
    type: 'string',
    format: 'binary',
    description: 'Internal Inspection Form',
  })
  internalInspectionForm?: Express.Multer.File;

  @ApiPropertyOptional({
    type: 'string',
    format: 'binary',
    description: 'Documents',
  })
  documents?: Express.Multer.File;

  @IsOptional()
  @IsString({
    message: 'please provide area as string',
  })
  @ApiPropertyOptional({
    description: 'area Required',
  })
  area?: string;

  @IsOptional()
  @IsString({
    message: 'please provide siteId as string',
  })
  @ApiPropertyOptional({
    description: 'site Id',
  })
  siteId?: string;

  @IsOptional()
  @IsString({
    message: 'please provide employeeId as string',
  })
  @ApiPropertyOptional({
    description: 'employee Id',
  })
  employeeId?: string;
}
