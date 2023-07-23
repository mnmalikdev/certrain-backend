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
exports.Employee = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const site_entity_1 = require("../../sites/entities/site.entity");
const Role_entity_1 = require("../../roles/entities/Role.entity");
const contractor_entity_1 = require("../../contractors/entities/contractor.entity");
const department_entity_1 = require("../../departments/entities/department.entity");
const assetRegister_entity_1 = require("../../assetRegister/entities/assetRegister.entity");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const riskAssesment_entity_1 = require("../../RiskAssesment/entities/riskAssesment.entity");
let Employee = exports.Employee = class Employee {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique ID of the employee',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Employee.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The employee first name',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The employee surname or last name',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee Number',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "empNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee email',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee email',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'type of employment',
        example: 'part-time',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'current employment status',
        example: 'permanent',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "employmentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: ' requested documentation',
    }),
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Employee.prototype, "requestedDocs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "requiredWithin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.employees, {
        cascade: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", site_entity_1.Site)
], Employee.prototype, "worksAtSite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role_entity_1.Role, (role) => role.employeeRole, {
        cascade: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", Role_entity_1.Role)
], Employee.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contractor_entity_1.Contractor, (contractor) => contractor.employeesEmployed, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", contractor_entity_1.Contractor)
], Employee.prototype, "employedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.employees, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", department_entity_1.Department)
], Employee.prototype, "belongToDepartment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assetRegister_entity_1.AssetRegister, (assetRegister) => assetRegister.assetsOfEmployee),
    __metadata("design:type", Array)
], Employee.prototype, "employeeHasAssets", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userEmployees),
    __metadata("design:type", user_entity_1.User)
], Employee.prototype, "employeeCreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => riskAssesment_entity_1.RiskAssessment, (riskAssessment) => riskAssessment.riskAssessmentOwners, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", Array)
], Employee.prototype, "riskAssessmentsOwned", void 0);
exports.Employee = Employee = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
//# sourceMappingURL=employee.entity.js.map