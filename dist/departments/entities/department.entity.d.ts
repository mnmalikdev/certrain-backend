import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
export declare class Department {
    departmentId: string;
    name: string;
    phoneNumber: string;
    extensionNumber: string;
    site: Site;
    roles: Role;
    employees: Employee;
    deptCreatedBy: User;
    riskAssessmentsOfDepartment: RiskAssessment[];
}
