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
exports.CreateContractorDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateContractorDTO {
}
exports.CreateContractorDTO = CreateContractorDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide name of contractor as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide name of contractor' }),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the contractor',
        example: 'Example Contractor',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide description of contractor as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide description of contractor' }),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the contractor',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide person in charge of contractor as a string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide person in charge of contractor' }),
    (0, swagger_1.ApiProperty)({
        description: 'The person in charge of the contractor',
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "personInCharge", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide roleId of contractor as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide roleId of contractor' }),
    (0, swagger_1.ApiProperty)({
        description: 'The role of the contractor',
        example: 'Contractor Role',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide email of person in charge as a string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide email of person in charge' }),
    (0, swagger_1.ApiProperty)({
        description: 'The email of the person in charge',
        example: 'john.doe@example.com',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "personInChargeEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide phone number of person in charge as a string',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide phone number of person in charge' }),
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the person in charge',
        example: '123-456-7890',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "personInChargePhone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide address of contractor as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide address of contractor' }),
    (0, swagger_1.ApiProperty)({
        description: 'The address of the contractor',
        example: '123 Main St, City, Country',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The VAT (Value Added Tax) of the contractor',
        example: '123456789',
        required: false,
    }),
    (0, class_validator_1.IsString)({
        message: 'please provide VAT as astring',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "VAT", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Please provide timeframe in which documents are required ',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Documents required within',
        example: '6 days or 1 month',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "docsRequiredWithin", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide requested documentation' }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Requested documentation',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "requestedDocumentation", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide site id for contractor to be associated with as string',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Please provide site id for contractor to be associated with  ',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'siteId',
    }),
    __metadata("design:type", String)
], CreateContractorDTO.prototype, "siteId", void 0);
//# sourceMappingURL=createContractor.dto.js.map