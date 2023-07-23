import { DepartmentService } from '../services/departments.service';
import { CreateDepartmentDTO } from '../DTOs/createDepartment.dto';
import { Department } from '../entities/department.entity';
import { UpdateDepartmentDTO } from '../DTOs/updateDepartment.dto';
import { Request } from 'express';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    createDepartment(req: Request, createDepartmentDTO: CreateDepartmentDTO): Promise<Department>;
    deleteDepartment(req: Request, departmentId: string): Promise<void>;
    findDepartmentById(req: Request, departmentId: string): Promise<Department>;
    findAllDepartments(req: Request): Promise<Department[]>;
    updateDepartment(req: Request, departmentId: string, updateDepartmentDTO: UpdateDepartmentDTO): Promise<Department>;
}
