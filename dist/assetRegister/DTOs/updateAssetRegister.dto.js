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
exports.UpdateAssetRegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAssetRegisterDto {
}
exports.UpdateAssetRegisterDto = UpdateAssetRegisterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Asset No must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Asset No' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "assetNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Make must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Make' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "make", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Model must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Model' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Serial Number must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Serial Number' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "serialNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Year of Manufacturer must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Year of Manufacturer',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "yearOfManufacturer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Date Installed must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Date Installed', example: '2022-01-01' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "dateInstalled", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Date Commissioned must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date Commissioned',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "dateCommissioned", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Required Training must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Required Training' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "requiredTraining", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Internal Inspection Frequency must be provided as string',
    }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Internal Inspection Frequency' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "internalInspectionFrequency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Statutory Inspection must be provided as string' }),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Statutory Inspection' }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "statutoryInspection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Date of Statutory Inspection must be provided as string',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date of Statutory Inspection',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "dateOfStatutoryInspection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBooleanString)({
        message: 'Risk Assessment Required must be a boolean value',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Risk Assessment Required',
        default: true,
    }),
    __metadata("design:type", Boolean)
], UpdateAssetRegisterDto.prototype, "riskAssessmentRequired", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'string',
        format: 'binary',
        description: 'Internal Inspection Form',
    }),
    __metadata("design:type", Object)
], UpdateAssetRegisterDto.prototype, "internalInspectionForm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'string',
        format: 'binary',
        description: 'Documents',
    }),
    __metadata("design:type", Object)
], UpdateAssetRegisterDto.prototype, "documents", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'please provide area as string',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'area Required',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'please provide siteId as string',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'site Id',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'please provide employeeId as string',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'employee Id',
    }),
    __metadata("design:type", String)
], UpdateAssetRegisterDto.prototype, "employeeId", void 0);
//# sourceMappingURL=updateAssetRegister.dto.js.map