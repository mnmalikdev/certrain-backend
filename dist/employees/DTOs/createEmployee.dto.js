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
exports.CreateEmployeeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmployeeDTO {
}
exports.CreateEmployeeDTO = CreateEmployeeDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide first Name as string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide first name' }),
    (0, swagger_1.ApiProperty)({
        description: 'first name',
        example: 'Example Employee',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide surname of employee as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide surname of employee of employee' }),
    (0, swagger_1.ApiProperty)({
        description: 'surname of employee ',
        example: 'surname of employee',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "surName", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide employeeNo as string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide employeeNo ' }),
    (0, swagger_1.ApiProperty)({
        description: 'Employee Number',
        example: 'EI-112-44-55',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "employeeNo", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide email of employee' }),
    (0, swagger_1.ApiProperty)({
        description: 'Employee email',
        example: 'employee@gmail.com',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide phone number of employee as string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide phone number' }),
    (0, swagger_1.ApiProperty)({
        description: 'Employee phone number',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide employment type as string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide employment type' }),
    (0, swagger_1.ApiProperty)({
        description: 'type of employment ',
        example: 'part-time',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "employmentType", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide status of employee as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide status of employee' }),
    (0, swagger_1.ApiProperty)({
        description: 'current employment status',
        example: 'permanent',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "employmentStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'provide site ID where employee works',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'site id where employee works.',
        required: true,
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'provide department ID where employee works',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'department id where employee works.',
        required: true,
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({
        message: 'requestedDocs',
    }),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateEmployeeDTO.prototype, "requestedDocs", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'timeframe in which they are required',
    }),
    (0, class_validator_1.IsString)({
        message: 'the required time frame must be provided as as tring',
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "requiredWithin", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Please provide roleId ',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'roleId of the role that user works as ',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide contractorId' }),
    (0, swagger_1.ApiProperty)({
        description: 'contractor Id which has employed this user.',
    }),
    __metadata("design:type", String)
], CreateEmployeeDTO.prototype, "contractorId", void 0);
//# sourceMappingURL=createEmployee.dto.js.map