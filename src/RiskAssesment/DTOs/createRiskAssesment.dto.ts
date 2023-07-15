import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Column } from 'typeorm';

export class CreateRiskAssessmentDTO {
  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'The ref number of a risk assessment',
  //   example: 'ref123',
  // })
  // refNo: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'area on which risk assessment was performed.',
  //   example: 'areaXYZ',
  // })
  // area: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'description of risk assessment.',
  //   example: 'Risk assessment description',
  // })
  // description: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'date of assessment.',
  //   example: '2023-07-09',
  // })
  // assessmentDate: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'review date.',
  //   example: '2023-07-16',
  // })
  // reviewDate: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'status of risk assessment.',
  //   example: 'completed',
  // })
  // status: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   description: 'who performed it?',
  //   example: 'John Doe',
  // })
  // riskAssessmentOwner: string;

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
  @ApiProperty({
    description: 'people at risk',
  })
  peopleAtRisk: string;

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'controls of risk assessment',
    example: ['control1', 'control2'],
    type: [String],
  })
  controls: string[];

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Risk rating.',
    example: 4,
  })
  riskRating: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Risk rating X.',
    example: 0,
  })
  riskRatingX: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Risk rating Y.',
    example: 0,
  })
  riskRatingY: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Residual risk rating object.',
    example: 3,
  })
  residualRiskRating: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Residual Risk rating X.',
    example: 0,
  })
  residualRiskRatingX: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Residual Risk rating Y.',
    example: 0,
  })
  residualRiskRatingY: number;
}
