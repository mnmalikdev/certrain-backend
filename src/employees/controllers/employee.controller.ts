import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('employees')
@ApiTags('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(
    @Body() createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.createEmployee(createEmployeeDTO);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.getEmployeeById(id);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDTO: UpdateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.updateEmployee(id, updateEmployeeDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }
}
