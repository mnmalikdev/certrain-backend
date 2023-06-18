import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('createEmployee')
  async create(
    @Body() createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.createEmployee(createEmployeeDTO);
  }

  @Get('fetchEmployee/:employeeId')
  async findOne(@Param('employeeId') id: string): Promise<Employee> {
    return this.employeeService.getEmployeeById(id);
  }

  @Get('fetchAllEmployees')
  async findAll(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Patch('updateEmployee/:employeeId')
  async update(
    @Param('employeeId') id: string,
    @Body() updateEmployeeDTO: UpdateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.updateEmployee(id, updateEmployeeDTO);
  }

  @Delete('deleteEmployee/:employeeId')
  async remove(@Param('id') id: string): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }
}
