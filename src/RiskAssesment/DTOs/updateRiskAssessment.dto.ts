import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRiskAssessmentDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The ref number of a risk assessment',
    example: 'ref123',
  })
  refNo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'area on which risk assessment was performed.',
    example: 'areaXYZ',
  })
  area?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'description of risk assessment.',
    example: 'Risk assessment description',
  })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'date of assessment.',
    example: '2023-07-09',
  })
  assessmentDate?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'residual risk rating.',
    example: 3,
  })
  residualRiskRating?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'risk rating.',
    example: 3,
  })
  riskRating?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'review date.',
    example: '2023-07-16',
  })
  reviewDate?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'status of risk assessment.',
    example: 'completed',
  })
  status?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'who performed it?',
    example: 'John Doe',
  })
  riskAssessmentOwner?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'exact hazard',
    example: 'fire hazard',
  })
  hazard?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'what is at risk?',
    example: 'property',
  })
  risk?: string;

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'people at risk',
    example: ['employee1', 'employee2'],
    type: [String],
  })
  peopleAtRisk?: string[];

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'controls of risk assessment',
    example: ['control1', 'control2'],
    type: [String],
  })
  controls?: string[];
}
