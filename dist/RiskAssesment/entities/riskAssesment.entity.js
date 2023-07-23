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
exports.RiskAssessment = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const department_entity_1 = require("../../departments/entities/department.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
let RiskAssessment = exports.RiskAssessment = class RiskAssessment {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique ID of the R.A record in DB',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "riskAssessmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ref number of a risk assessment',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "refNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' exact hazard',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "hazard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' what is at risk?',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "risk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' what is at risk?',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "peopleAtRisk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' controls of risk assessment',
    }),
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], RiskAssessment.prototype, "controls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'residual risk rating.',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "residualRiskRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'residual risk rating string.',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "residualRiskRatingColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'residual risk rating x .',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "residualRiskRatingX", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'residual risk rating y .',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "residualRiskRatingY", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'risk rating.',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "riskRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' risk rating Color .',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RiskAssessment.prototype, "riskRatingColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' risk rating x .',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "riskRatingX", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' risk rating y .',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RiskAssessment.prototype, "riskRatingY", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userRiskAssessments),
    __metadata("design:type", user_entity_1.User)
], RiskAssessment.prototype, "riskAssessmentCreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => employee_entity_1.Employee, (employee) => employee.riskAssessmentsOwned),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], RiskAssessment.prototype, "riskAssessmentOwners", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => site_entity_1.Site, (site) => site.riskAssessmentsOfSite, {
        nullable: true,
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", Array)
], RiskAssessment.prototype, "assignedToSites", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => department_entity_1.Department, (dept) => dept.riskAssessmentsOfDepartment, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], RiskAssessment.prototype, "assignedToDepartments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.riskAssessmentsOfRole, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], RiskAssessment.prototype, "assignedToRoles", void 0);
exports.RiskAssessment = RiskAssessment = __decorate([
    (0, typeorm_1.Entity)()
], RiskAssessment);
//# sourceMappingURL=riskAssesment.entity.js.map