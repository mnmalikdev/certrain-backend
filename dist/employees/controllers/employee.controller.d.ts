import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
import { Request } from 'express';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(req: Request, createEmployeeDTO: CreateEmployeeDTO): Promise<Employee>;
    findOne(req: Request, id: string): Promise<Employee>;
    findAll(req: Request): Promise<Employee[]>;
    update(req: Request, id: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee>;
    remove(req: Request, id: string): Promise<void>;
}
