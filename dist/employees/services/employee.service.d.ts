import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDTO } from '../DTOs/createEmployee.dto';
import { UpdateEmployeeDTO } from '../DTOs/updateEmployee.dto';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    createEmployee(userId: string, createEmployeeDTO: CreateEmployeeDTO): Promise<Employee>;
    getEmployeeById(userId: string, employeeId: string): Promise<Employee>;
    getAllEmployees(userId: string): Promise<Employee[]>;
    updateEmployee(userId: string, employeeId: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee>;
    deleteEmployee(userId: string, employeeId: string): Promise<void>;
}
