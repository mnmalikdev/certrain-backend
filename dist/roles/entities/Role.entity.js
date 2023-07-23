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
exports.Role = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const department_entity_1 = require("../../departments/entities/department.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const contractor_entity_1 = require("../../contractors/entities/contractor.entity");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const riskAssesment_entity_1 = require("../../RiskAssesment/entities/riskAssesment.entity");
let Role = exports.Role = class Role {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique ID of the role',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Role.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the role',
        example: 'Example Role',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the role',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Responsibilities of the role',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "responsibilities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.roles, {
        cascade: true,
        onDelete: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", site_entity_1.Site)
], Role.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.roles, {
        cascade: true,
        onDelete: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", department_entity_1.Department)
], Role.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.role),
    __metadata("design:type", employee_entity_1.Employee)
], Role.prototype, "employeeRole", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contractor_entity_1.Contractor, (contractor) => contractor.roleOfContractor),
    __metadata("design:type", Array)
], Role.prototype, "contractorHasRole", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userRoles),
    __metadata("design:type", user_entity_1.User)
], Role.prototype, "roleCreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => riskAssesment_entity_1.RiskAssessment, (riskAssessment) => riskAssessment.assignedToRoles, {
        onDelete: 'SET NULL',
        cascade: true,
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Role.prototype, "riskAssessmentsOfRole", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)()
], Role);
//# sourceMappingURL=Role.entity.js.map