import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { DepartmentService } from '../services/departments.service';
import { CreateDepartmentDTO } from '../DTOs/createDepartment.dto';
import { Department } from '../entities/department.entity';
import { UpdateDepartmentDTO } from '../DTOs/updateDepartment.dto';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('createDepartment')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new department',
    type: Department,
  })
  async createDepartment(
    @Body() createDepartmentDTO: CreateDepartmentDTO,
  ): Promise<Department> {
    try {
      const newDepartment = await this.departmentService.createDepartment(
        createDepartmentDTO,
      );
      return newDepartment;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('deleteDepartment/:departmentId')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Deletes a department',
  })
  async deleteDepartment(
    @Param('departmentId') departmentId: string,
  ): Promise<void> {
    try {
      await this.departmentService.deleteDepartment(departmentId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('fetchDepartment/:departmentId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves a department by ID',
    type: Department,
  })
  async findDepartmentById(
    @Param('departmentId') departmentId: string,
  ): Promise<Department> {
    try {
      const department = await this.departmentService.findDepartmentById(
        departmentId,
      );
      return department;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/fetchAllDepartments')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves all departments',
    type: [Department],
  })
  async findAllDepartments(): Promise<Department[]> {
    const departments = await this.departmentService.findAllDepartments();
    return departments;
  }

  @Patch('updateDepartment/:departmentId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updates a department',
    type: Department,
  })
  async updateDepartment(
    @Param('departmentId') departmentId: string,
    @Body() updateDepartmentDTO: UpdateDepartmentDTO,
  ): Promise<Department> {
    try {
      const updatedDepartment = await this.departmentService.updateDepartment(
        departmentId,
        updateDepartmentDTO,
      );
      return updatedDepartment;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
