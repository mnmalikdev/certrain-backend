import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSiteDTO {
  @IsNotEmpty({
    message: 'please provide a name for site',
  })
  @IsString({
    message: 'site name must be a string',
  })
  @ApiProperty({
    description: 'The name of the site',
    example: 'Example Site',
  })
  name: string;

  @IsNotEmpty({
    message: 'please provide an address for site',
  })
  @IsString({
    message: 'site address must be a string',
  })
  @ApiProperty({
    description: 'The address of the site',
    example: '123 Main St, City, Country',
  })
  address: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    description: 'create a risk assessment site',
  })
  siteRiskAssessmentIds: string[];
}
