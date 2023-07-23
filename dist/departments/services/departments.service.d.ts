import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { CreateDepartmentDTO } from '../DTOs/createDepartment.dto';
import { UpdateDepartmentDTO } from '../DTOs/updateDepartment.dto';
export declare class DepartmentService {
    private readonly departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    createDepartment(userId: string, createDepartmentDTO: CreateDepartmentDTO): Promise<Department>;
    findDepartmentById(userId: string, departmentId: string): Promise<Department>;
    findAllDepartments(userId: string): Promise<Department[]>;
    updateDepartment(userId: string, departmentId: string, updateDepartmentDTO: Partial<UpdateDepartmentDTO>): Promise<Department>;
    deleteDepartment(userId: string, departmentId: string): Promise<void>;
}
