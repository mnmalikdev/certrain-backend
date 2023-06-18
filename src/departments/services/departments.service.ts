import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
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
    createDepartmentDTO: CreateDepartmentDTO,
  ): Promise<Department> {
    const newDepartment = new Department();
    newDepartment.departmentId = uuidv4();
    newDepartment.name = createDepartmentDTO.name;
    newDepartment.phoneNumber = createDepartmentDTO.phoneNumber;
    newDepartment.extensionNumber = createDepartmentDTO.extensionNumber;
    newDepartment.site = <any>{ siteId: createDepartmentDTO?.siteId };

    await this.departmentRepository.save(newDepartment);
    return newDepartment;
  }

  async findDepartmentById(departmentId: string): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: {
        departmentId,
      },
      relations: ['site'],
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }

  async findAllDepartments(): Promise<Department[]> {
    return this.departmentRepository.find({
      relations: {
        site: true,
      },
    });
  }

  async updateDepartment(
    departmentId: string,
    updateDepartmentDTO: Partial<UpdateDepartmentDTO>,
  ): Promise<Department> {
    const department = await this.findDepartmentById(departmentId);
    Object.assign(department, updateDepartmentDTO);
    await this.departmentRepository.save(department);
    return department;
  }

  async deleteDepartment(departmentId: string): Promise<void> {
    const department = await this.findDepartmentById(departmentId);
    await this.departmentRepository.remove(department);
  }
}
