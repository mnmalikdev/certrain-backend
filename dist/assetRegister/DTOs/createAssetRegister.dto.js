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
exports.CreateAssetRegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAssetRegisterDto {
}
exports.CreateAssetRegisterDto = CreateAssetRegisterDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Asset No must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Asset No must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Asset No',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "assetNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Make must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Make must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Make',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "make", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Model must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Model must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Model',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Serial Number must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Serial Number must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Serial Number',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "serialNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Year of Manufacturer',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "yearOfManufacturer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date Installed',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "dateInstalled", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date Commissioned',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "dateCommissioned", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Required Training must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Required Training',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "requiredTraining", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Internal Inspection Frequency must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Internal Inspection Frequency must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Internal Inspection Frequency',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "internalInspectionFrequency", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Statutory Inspection must be provided',
    }),
    (0, class_validator_1.IsString)({
        message: 'Statutory Inspection must be provided as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Statutory Inspection',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "statutoryInspection", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date of Statutory Inspection',
        example: '2022-01-01',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "dateOfStatutoryInspection", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'string',
        format: 'binary',
        description: 'Internal Inspection Form',
    }),
    (0, class_transformer_1.Type)(() => Object),
    __metadata("design:type", Object)
], CreateAssetRegisterDto.prototype, "internalInspectionForm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'string',
        format: 'binary',
        description: 'Documents',
    }),
    (0, class_transformer_1.Type)(() => Object),
    __metadata("design:type", Object)
], CreateAssetRegisterDto.prototype, "documents", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Risk Assessment Required must be provided',
    }),
    (0, class_validator_1.IsBooleanString)({
        message: 'Risk Assessment Required must be a boolean value',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Risk Assessment Required',
        default: true,
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "riskAssessmentRequired", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'please provide area',
    }),
    (0, class_validator_1.IsString)({
        message: 'please provide area as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'area Required',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'please provide siteId',
    }),
    (0, class_validator_1.IsString)({
        message: 'please provide siteId as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'site Id',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'please provide employeeId',
    }),
    (0, class_validator_1.IsString)({
        message: 'please provide employeeId as string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'employee Id',
    }),
    __metadata("design:type", String)
], CreateAssetRegisterDto.prototype, "employeeId", void 0);
//# sourceMappingURL=createAssetRegister.dto.js.map