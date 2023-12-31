// role.service.ts
import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { CreateRoleDTO } from '../DTOs/createRole.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateRoleDTO } from '../DTOs/updateRole.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async createRole(userId: string, createRoleDTO: CreateRoleDTO) {
    const role = await this.roleRepository.findOne({
      where: {
        roleCreatedBy: <any>{ userId: userId },
        name: createRoleDTO?.name,
      },
    });
    if (role) {
      throw new ForbiddenException('A role with this name already exists');
    }
    const newRole = new Role();
    newRole.roleId = uuidv4();
    newRole.name = createRoleDTO.name;
    newRole.description = createRoleDTO.description;
    newRole.responsibilities = createRoleDTO.responsibilities;
    newRole.site = <any>{ siteId: createRoleDTO?.siteId };
    newRole.department = <any>{ departmentId: createRoleDTO?.departmentId };
    newRole.roleCreatedBy = <any>{
      userId: userId,
    };
    newRole.riskAssessmentsOfRole = createRoleDTO?.roleRiskAssessmentIds?.map(
      (riskAssessmentId) => {
        return <any>{ riskAssessmentId: riskAssessmentId };
      },
    );

    await this.roleRepository.save(newRole);
    return newRole;
  }

  async findRoleById(userId: string, roleId: string): Promise<Role> {
    const role = await this.roleRepository.findOne({
      where: {
        roleCreatedBy: <any>{ userId: userId },
        roleId,
      },
      relations: ['site', 'department', 'riskAssessmentsOfRole'],
    });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  async findAllRoles(userId: string): Promise<Role[]> {
    return this.roleRepository.find({
      where: {
        roleCreatedBy: <any>{ userId: userId },
      },
      relations: ['site', 'department', 'riskAssessmentsOfRole'],
    });
  }

  async deleteRole(userId: string, roleId: string): Promise<void> {
    const role = await this.roleRepository.findOne({
      where: {
        roleCreatedBy: <any>{ userId: userId },
        roleId,
      },
    });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    await this.roleRepository.remove(role);
  }

  async updateRole(
    userId: string,
    roleId: string,
    updateRoleDTO: UpdateRoleDTO,
  ): Promise<Role> {
    const role = await this.findRoleById(userId, roleId);
    if (updateRoleDTO.name) {
      role.name = updateRoleDTO.name;
    }
    if (updateRoleDTO.description) {
      role.description = updateRoleDTO.description;
    }
    if (updateRoleDTO.responsibilities) {
      role.responsibilities = updateRoleDTO.responsibilities;
    }
    if (updateRoleDTO.siteId) {
      role.site = <any>{ siteId: updateRoleDTO.siteId };
    }
    if (updateRoleDTO.departmentId) {
      role.department = <any>{ departmentId: updateRoleDTO.departmentId };
    }

    if (updateRoleDTO.roleRiskAssessmentIds) {
      role.riskAssessmentsOfRole = updateRoleDTO?.roleRiskAssessmentIds?.map(
        (riskAssessmentId) => {
          return <any>{ riskAssessmentId: riskAssessmentId };
        },
      );
    }

    await this.roleRepository.save(role);
    return role;
  }
}
