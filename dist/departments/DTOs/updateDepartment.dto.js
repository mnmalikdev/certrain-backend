"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateDepartmentDTO {
}
exports.UpdateDepartmentDTO = UpdateDepartmentDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Department name must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the department',
        example: 'Example Department',
    }),
    __metadata("design:type", String)
], UpdateDepartmentDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Phone number must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the department',
        example: '123-456-7890',
    }),
    __metadata("design:type", String)
], UpdateDepartmentDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Extension number must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The extension number of the department',
        example: '1234',
    }),
    __metadata("design:type", String)
], UpdateDepartmentDTO.prototype, "extensionNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Site ID must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the site to link the department',
        example: '1234567890',
    }),
    __metadata("design:type", String)
], UpdateDepartmentDTO.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'create a risk assessment site',
    }),
    __metadata("design:type", Array)
], UpdateDepartmentDTO.prototype, "deptRiskAssessmentIds", void 0);
//# sourceMappingURL=updateDepartment.dto.js.map