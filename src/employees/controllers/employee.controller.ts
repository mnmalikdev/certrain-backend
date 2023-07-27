import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('employees')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('createEmployee')
  async create(
    @Req() req: Request,
    @Body() createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.createEmployee(
      req.user['sub'],
      createEmployeeDTO,
    );
  }

  @Get('fetchEmployee/:employeeId')
  async findOne(
    @Req() req: Request,
    @Param('employeeId') id: string,
  ): Promise<Employee> {
    return this.employeeService.getEmployeeById(req.user['sub'], id);
  }

  @Get('fetchAllEmployees')
  async findAll(@Req() req: Request): Promise<Employee[]> {
    return this.employeeService.getAllEmployees(req.user['sub']);
  }

  @Patch('updateEmployee/:employeeId')
  async update(
    @Req() req: Request,
    @Param('employeeId') id: string,
    @Body() updateEmployeeDTO: UpdateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.updateEmployee(
      req.user['sub'],
      id,
      updateEmployeeDTO,
    );
  }

  @Delete('deleteEmployee/:employeeId')
  async remove(
    @Req() req: Request,
    @Param('employeeId') id: string,
  ): Promise<void> {
    return this.employeeService.deleteEmployee(req.user['sub'], id);
  }
}
