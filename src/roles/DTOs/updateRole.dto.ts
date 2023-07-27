import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDTO } from './createRole.dto';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateRoleDTO extends PartialType(CreateRoleDTO) {
  @IsArray()
  @IsOptional()
  @ApiProperty({
    description: 'update a risk assessment with role',
  })
  roleRiskAssessmentIds: string[];
}
