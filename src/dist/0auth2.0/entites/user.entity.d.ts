import { Role } from '../enums';
import { Site } from 'src/sites/entities/site.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
export declare class User {
    userId: string;
    userName: string;
    businessName: string;
    email: string;
    password: string;
    hashedRt: string;
    isVerified: boolean;
    role: Role;
    userSites: Site[];
    userDepts: Department[];
    userContractors: Contractor[];
    userRoles: Role[];
    userEmployees: Employee[];
    userAssets: Employee[];
    userRiskAssessments: RiskAssessment[];
}
