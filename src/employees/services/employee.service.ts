import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(
    createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    const newEmployee = new Employee();
    newEmployee.employeeId = uuidv4();
    newEmployee.firstName = createEmployeeDTO.firstName;
    newEmployee.surName = createEmployeeDTO.surName;
    newEmployee.empNumber = createEmployeeDTO.employeeNo;
    newEmployee.email = createEmployeeDTO.email;
    newEmployee.phoneNumber = createEmployeeDTO.phoneNumber;
    newEmployee.employmentType = createEmployeeDTO.employmentType;
    newEmployee.employmentStatus = createEmployeeDTO.employmentStatus;
    newEmployee.requestedDocs = createEmployeeDTO.requestedDocs;
    newEmployee.requiredWithin = createEmployeeDTO.requiredWithin;
    newEmployee.worksAtSite = <any>{ siteId: createEmployeeDTO.siteId };
    newEmployee.role = <any>{ roleId: createEmployeeDTO.roleId };
    newEmployee.employedBy = <any>{
      contractorId: createEmployeeDTO.contractorId,
    };
    newEmployee.belongToDepartment = <any>{
      departmentId: createEmployeeDTO.departmentId,
    };

    await this.employeeRepository.save(newEmployee);
    return newEmployee;
  }

  async getEmployeeById(employeeId: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: {
        employeeId,
      },
      relations: ['worksAtSite', 'role', 'employedBy', 'belongToDepartment'],
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeRepository.find({
      relations: ['worksAtSite', 'role', 'employedBy', 'belongToDepartment'],
    });
  }

  async updateEmployee(
    employeeId: string,
    updateEmployeeDTO: UpdateEmployeeDTO,
  ): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: {
        employeeId,
      },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    // Update the fields of the employee if provided in the DTO
    if (updateEmployeeDTO.firstName) {
      employee.firstName = updateEmployeeDTO.firstName;
    }
    if (updateEmployeeDTO.surName) {
      employee.surName = updateEmployeeDTO.surName;
    }
    if (updateEmployeeDTO.employeeNo) {
      employee.empNumber = updateEmployeeDTO.employeeNo;
    }
    if (updateEmployeeDTO.email) {
      employee.email = updateEmployeeDTO.email;
    }
    if (updateEmployeeDTO.phoneNumber) {
      employee.phoneNumber = updateEmployeeDTO.phoneNumber;
    }
    if (updateEmployeeDTO.employmentType) {
      employee.employmentType = updateEmployeeDTO.employmentType;
    }
    if (updateEmployeeDTO.employmentStatus) {
      employee.employmentStatus = updateEmployeeDTO.employmentStatus;
    }
    if (updateEmployeeDTO.siteId) {
      employee.worksAtSite = <any>{ siteId: updateEmployeeDTO.siteId };
    }
    if (updateEmployeeDTO.roleId) {
      employee.role = <any>{ roleId: updateEmployeeDTO.roleId };
    }
    if (updateEmployeeDTO.contractorId) {
      employee.employedBy = <any>{
        contractorId: updateEmployeeDTO.contractorId,
      };
    }

    if (updateEmployeeDTO.departmentId) {
      employee.belongToDepartment = <any>{
        departmentId: updateEmployeeDTO.departmentId,
      };
    }

    await this.employeeRepository.save(employee);
    return employee;
  }

  async deleteEmployee(employeeId: string): Promise<void> {
    const employee = await this.employeeRepository.findOne({
      where: {
        employeeId,
      },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    await this.employeeRepository.remove(employee);
  }
}
