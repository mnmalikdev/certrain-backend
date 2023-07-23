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
exports.CreateRiskAssessmentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRiskAssessmentDTO {
}
exports.CreateRiskAssessmentDTO = CreateRiskAssessmentDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The ref number of a risk assessment',
        example: 'ref123',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "refNo", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'people who performed it?',
    }),
    __metadata("design:type", Array)
], CreateRiskAssessmentDTO.prototype, "riskAssessmentOwnerIds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'exact hazard',
        example: 'fire hazard',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "hazard", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'what is at risk?',
        example: 'property',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "risk", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'people at risk',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "peopleAtRisk", void 0);
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'controls of risk assessment',
        example: ['control1', 'control2'],
        type: [String],
    }),
    __metadata("design:type", Array)
], CreateRiskAssessmentDTO.prototype, "controls", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Risk rating.',
        example: 4,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "riskRating", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Risk rating color.',
        example: '#fffff',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "riskRatingColor", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Risk rating X.',
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "riskRatingX", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Risk rating Y.',
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "riskRatingY", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Residual risk rating object.',
        example: 3,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "residualRiskRating", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Residual Risk rating color.',
        example: '#fffff',
    }),
    __metadata("design:type", String)
], CreateRiskAssessmentDTO.prototype, "residualRiskRatingColor", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Residual Risk rating X.',
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "residualRiskRatingX", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'Residual Risk rating Y.',
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateRiskAssessmentDTO.prototype, "residualRiskRatingY", void 0);
//# sourceMappingURL=createRiskAssesment.dto.js.map