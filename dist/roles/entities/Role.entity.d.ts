import { Department } from 'src/departments/entities/department.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
export declare class Role {
    roleId: string;
    name: string;
    description: string;
    responsibilities: string;
    site: Site;
    department?: Department;
    employeeRole: Employee;
    contractorHasRole: Employee[];
    roleCreatedBy: User;
    riskAssessmentsOfRole: RiskAssessment[];
}
