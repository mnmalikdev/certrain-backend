import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateSiteDTO {
  @IsOptional()
  @IsString({
    message: 'site name must be a string',
  })
  @ApiProperty({
    description: 'The name of the site',
    example: 'Example Site',
  })
  name?: string;

  @IsOptional()
  @IsString({
    message: 'site address must be a string',
  })
  @ApiProperty({
    description: 'The address of the site',
    example: '123 Main St, City, Country',
  })
  address?: string;
}
