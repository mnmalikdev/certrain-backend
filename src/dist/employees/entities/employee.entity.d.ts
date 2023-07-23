import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { AssetRegister } from 'src/assetRegister/entities/assetRegister.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
export declare class Employee {
    employeeId: string;
    firstName: string;
    surName: string;
    empNumber: string;
    email: string;
    phoneNumber: string;
    employmentType: string;
    employmentStatus: string;
    requestedDocs: string[];
    requiredWithin: string;
    worksAtSite: Site;
    role: Role;
    employedBy: Contractor;
    belongToDepartment: Department;
    employeeHasAssets: AssetRegister[];
    employeeCreatedBy: User;
    riskAssessmentsOwned: RiskAssessment[];
}
