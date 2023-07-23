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
exports.PartialUpdateEmployeeDTO = exports.UpdateEmployeeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateEmployeeDTO {
}
exports.UpdateEmployeeDTO = UpdateEmployeeDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide first name as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'First name of the employee',
        example: 'John',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({
        message: 'requestedDocs',
    }),
    (0, class_validator_1.IsString)({ message: 'Please provide requested docs as a string' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "requestedDocs", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({
        message: 'timeframe in which they are required',
    }),
    (0, class_validator_1.IsString)({
        message: 'the required time frame must be provided as as tring',
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "requiredWithin", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide surname as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Surname of the employee',
        example: 'Doe',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "surName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email of the employee',
        example: 'john.doe@example.com',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide phone number as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Phone number of the employee',
        example: '1234567890',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide employeeNo as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Employee Number',
        example: 'EI-112-44-55',
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "employeeNo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide employment type as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Type of employment',
        example: 'full-time',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "employmentType", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide employment status as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Current employment status',
        example: 'permanent',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "employmentStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide site ID as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the site where the employee works',
        example: 'site123',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide role ID as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the role that the employee has',
        example: 'role123',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide contractor ID as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the contractor employing the employee',
        example: 'contractor123',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "contractorId", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'provide department ID where employee works',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'department id where employee works.',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateEmployeeDTO.prototype, "departmentId", void 0);
class PartialUpdateEmployeeDTO extends (0, swagger_1.PartialType)(UpdateEmployeeDTO) {
}
exports.PartialUpdateEmployeeDTO = PartialUpdateEmployeeDTO;
//# sourceMappingURL=updateEmployee.dto.js.map