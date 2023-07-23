export declare class UpdateEmployeeDTO {
    firstName?: string;
    requestedDocs: string;
    requiredWithin: string;
    surName?: string;
    email?: string;
    phoneNumber?: string;
    employeeNo: string;
    employmentType?: string;
    employmentStatus?: string;
    siteId?: string;
    roleId?: string;
    contractorId?: string;
    departmentId: string;
}
declare const PartialUpdateEmployeeDTO_base: import("@nestjs/common").Type<Partial<UpdateEmployeeDTO>>;
export declare class PartialUpdateEmployeeDTO extends PartialUpdateEmployeeDTO_base {
}
export {};
