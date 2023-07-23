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
exports.UpdateContractorDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateContractorDTO {
}
exports.UpdateContractorDTO = UpdateContractorDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the contractor',
        example: 'Updated Contractor',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the name of the contractor as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the name of the contractor' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the contractor',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the description of the contractor as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the description of the contractor' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The person in charge of the contractor',
        example: 'John Doe',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the person in charge of the contractor as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Please provide the person in charge of the contractor',
    }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "personInCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The role of the contractor',
        example: 'Updated Contractor Role',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the roleId of the contractor as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the roleId of the contractor' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email of the person in charge',
        example: 'john.doe@example.com',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the email of the person in charge as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the email of the person in charge' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "personInChargeEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the person in charge',
        example: '123-456-7890',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the phone number of the person in charge as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Please provide the phone number of the person in charge',
    }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "personInChargePhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The address of the contractor',
        example: '456 Main St, City, Country',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the address of the contractor as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the address of the contractor' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The VAT (Value Added Tax) of the contractor',
        example: '987654321',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'Please provide the VAT as a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "VAT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The documents required within',
        example: '7 days',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'Please provide the documents required within as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the documents required within' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "docsRequiredWithin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The requested documentation',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        each: true,
        message: 'Please provide each requested documentation as a string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the requested documentation' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "requestedDocumentation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The site ID to associate the contractor with',
        required: false,
    }),
    (0, class_validator_1.IsString)({ message: 'Please provide the site ID as a string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide the site ID' }),
    __metadata("design:type", String)
], UpdateContractorDTO.prototype, "siteId", void 0);
//# sourceMappingURL=updateContractor.dto.js.map