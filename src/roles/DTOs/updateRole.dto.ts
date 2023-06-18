import { PartialType } from '@nestjs/swagger';
import { CreateRoleDTO } from './createRole.dto';

export class UpdateRoleDTO extends PartialType(CreateRoleDTO) {}
