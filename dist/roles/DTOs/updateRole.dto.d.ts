import { CreateRoleDTO } from './createRole.dto';
declare const UpdateRoleDTO_base: import("@nestjs/common").Type<Partial<CreateRoleDTO>>;
export declare class UpdateRoleDTO extends UpdateRoleDTO_base {
    roleRiskAssessmentIds: string[];
}
export {};
