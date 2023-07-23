/// <reference types="multer" />
export declare class UpdateAssetRegisterDto {
    assetNo?: string;
    make?: string;
    model?: string;
    serialNumber?: string;
    yearOfManufacturer?: string;
    dateInstalled?: string;
    dateCommissioned?: string;
    requiredTraining?: string;
    internalInspectionFrequency?: string;
    statutoryInspection?: string;
    dateOfStatutoryInspection?: string;
    riskAssessmentRequired?: boolean;
    internalInspectionForm?: Express.Multer.File;
    documents?: Express.Multer.File;
    area?: string;
    siteId?: string;
    employeeId?: string;
}
