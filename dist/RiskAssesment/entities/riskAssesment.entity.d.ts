import { User } from 'src/0auth2.0/entites/user.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/Role.entity';
export declare class RiskAssessment {
    riskAssessmentId: string;
    refNo: string;
    hazard: string;
    risk: string;
    peopleAtRisk: string;
    controls: string[];
    residualRiskRating: number;
    residualRiskRatingColor: string;
    residualRiskRatingX: number;
    residualRiskRatingY: number;
    riskRating: number;
    riskRatingColor: string;
    riskRatingX: number;
    riskRatingY: number;
    riskAssessmentCreatedBy: User;
    riskAssessmentOwners: Employee[];
    assignedToSites: RiskAssessment[];
    assignedToDepartments: Department[];
    assignedToRoles: Role[];
}
