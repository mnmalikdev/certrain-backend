/// <reference types="multer" />
export declare class CreateAssetRegisterDto {
    assetNo: string;
    make: string;
    model: string;
    serialNumber: string;
    yearOfManufacturer: string;
    dateInstalled: string;
    dateCommissioned: string;
    requiredTraining?: string;
    internalInspectionFrequency: string;
    statutoryInspection: string;
    dateOfStatutoryInspection: string;
    internalInspectionForm?: Express.Multer.File;
    documents?: Express.Multer.File;
    riskAssessmentRequired: string;
    area: string;
    siteId: string;
    employeeId: string;
}
