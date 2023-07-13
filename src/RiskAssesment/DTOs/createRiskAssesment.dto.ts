import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRiskAssessmentDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ref number of a risk assessment',
    example: 'ref123',
  })
  refNo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'area on which risk assessment was performed.',
    example: 'areaXYZ',
  })
  area: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'description of risk assessment.',
    example: 'Risk assessment description',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'date of assessment.',
    example: '2023-07-09',
  })
  assessmentDate: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'risk rating.',
    example: 3,
  })
  riskRating: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'residual risk rating.',
    example: 3,
  })
  residualRiskRating: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'review date.',
    example: '2023-07-16',
  })
  reviewDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'status of risk assessment.',
    example: 'completed',
  })
  status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'who performed it?',
    example: 'John Doe',
  })
  riskAssessmentOwner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'exact hazard',
    example: 'fire hazard',
  })
  hazard: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'what is at risk?',
    example: 'property',
  })
  risk: string;

  @IsString()
  @IsOptional()
  @IsArray()
  @ApiProperty({
    description: 'people at risk',
    example: ['employee1', 'employee2'],
  })
  peopleAtRisk: string[];

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'controls of risk assessment',
    example: ['control1', 'control2'],
    type: [String],
  })
  controls: string[];
}
