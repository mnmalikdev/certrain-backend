import { AssetRegister } from 'src/assetRegister/entities/assetRegister.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
export declare class Site {
    siteId: string;
    name: string;
    address: string;
    departmentOfSite: Department[];
    contractors: Contractor;
    roles: Role;
    employees: Employee;
    assets: AssetRegister[];
    siteCreatedBy: User;
    riskAssessmentsOfSite: RiskAssessment[];
}
