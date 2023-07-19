import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column } from 'typeorm';

export class UpdateRiskAssessmentDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The ref number of a risk assessment',
    example: 'ref123',
  })
  refNo?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'area on which risk assessment was performed.',
  //   example: 'areaXYZ',
  // })
  // area?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'description of risk assessment.',
  //   example: 'Risk assessment description',
  // })
  // description?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'date of assessment.',
  //   example: '2023-07-09',
  // })
  // assessmentDate?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'review date.',
  //   example: '2023-07-16',
  // })
  // reviewDate?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'status of risk assessment.',
  //   example: 'completed',
  // })
  // status?: string;

  // @IsString()
  // @IsOptional()
  // @ApiProperty({
  //   description: 'who performed it?',
  //   example: 'John Doe',
  // })
  // riskAssessmentOwner?: string;

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

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'people at risk',
  })
  peopleAtRisk?: string;

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'controls of risk assessment',
    example: ['control1', 'control2'],
    type: [String],
  })
  controls?: string[];

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'residual risk rating.',
    example: 3,
  })
  residualRiskRating?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Residual Risk rating X.',
    example: 0,
  })
  residualRiskRatingX?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Residual Risk rating Y.',
    example: 0,
  })
  residualRiskRatingY?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'risk rating.',
    example: 3,
  })
  riskRating?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Risk rating X.',
    example: 0,
  })
  riskRatingX?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Risk rating Y.',
    example: 0,
  })
  riskRatingY?: number;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    description: 'who performed it?',
  })
  riskAssessmentOwnerIds: string[];

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Residual Risk rating color.',
    example: '#fffff',
  })
  residualRiskRatingColor: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Risk rating color.',
    example: '#fffff',
  })
  riskRatingColor: string;
}
