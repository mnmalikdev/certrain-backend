import { User } from 'src/0auth2.0/entites/user.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Site } from 'src/sites/entities/site.entity';
export declare class AssetRegister {
    assetId: string;
    assetNo: string;
    area: string;
    make: string;
    model: string;
    serialNumber: string;
    yearOfManufacturer: string;
    dateInstalled: string;
    dateCommissioned: string;
    requiredTraining: string;
    riskAssessmentRequired: string;
    internalInspectionFrequency: string;
    statutoryInspection: string;
    dateOfStatutoryInspection: string;
    internalInpectionForm: string;
    documents: string;
    assetsOfSite: Site;
    assetsOfEmployee: Employee;
    assetCreatedBy: User;
}
