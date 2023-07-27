import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { CreateDepartmentDTO } from '../DTOs/createDepartment.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDepartmentDTO } from '../DTOs/updateDepartment.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async createDepartment(
    userId: string,
    createDepartmentDTO: CreateDepartmentDTO,
  ): Promise<Department> {
    const newDepartment = new Department();
    newDepartment.departmentId = uuidv4();
    newDepartment.name = createDepartmentDTO.name;
    newDepartment.phoneNumber = createDepartmentDTO.phoneNumber;
    newDepartment.extensionNumber = createDepartmentDTO.extensionNumber;
    newDepartment.site = <any>{ siteId: createDepartmentDTO?.siteId };
    newDepartment.deptCreatedBy = <any>{ userId: userId };
    newDepartment.riskAssessmentsOfDepartment =
      createDepartmentDTO.deptRiskAssessmentIds.map(
        (riskAssessmentId) => <any>{ riskAssessmentId: riskAssessmentId },
      );
    await this.departmentRepository.save(newDepartment);
    return newDepartment;
  }

  async findDepartmentById(
    userId: string,
    departmentId: string,
  ): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: {
        deptCreatedBy: <any>{ userId: userId },
        departmentId,
      },
      relations: ['site', 'riskAssessmentsOfDepartment'],
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }

  async findAllDepartments(userId: string): Promise<Department[]> {
    return this.departmentRepository.find({
      where: {
        deptCreatedBy: <any>{ userId: userId },
      },
      relations: {
        site: true,
        riskAssessmentsOfDepartment: true,
      },
    });
  }

  async updateDepartment(
    userId: string,
    departmentId: string,
    updateDepartmentDTO: Partial<UpdateDepartmentDTO>,
  ): Promise<Department> {
    const department = await this.findDepartmentById(userId, departmentId);
    Object.assign(department, updateDepartmentDTO);
    if (updateDepartmentDTO?.siteId) {
      department.site = <any>{ siteId: updateDepartmentDTO?.siteId };
    }

    if (updateDepartmentDTO.deptRiskAssessmentIds) {
      department.riskAssessmentsOfDepartment =
        updateDepartmentDTO.deptRiskAssessmentIds.map(
          (riskAssessmentId) => <any>{ riskAssessmentId: riskAssessmentId },
        );
    }
    await this.departmentRepository.save(department);
    return department;
  }

  async deleteDepartment(userId: string, departmentId: string): Promise<void> {
    const department = await this.findDepartmentById(userId, departmentId);
    await this.departmentRepository.remove(department);
  }
}
