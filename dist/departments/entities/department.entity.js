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
exports.Department = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const site_entity_1 = require("../../sites/entities/site.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const riskAssesment_entity_1 = require("../../RiskAssesment/entities/riskAssesment.entity");
let Department = exports.Department = class Department {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique ID of the department',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Department.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the department',
        example: 'Example Department',
    }),
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the department',
        example: '123-456-7890',
    }),
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Department.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The extension number of the department',
        example: '1234',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "extensionNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.departmentOfSite, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", site_entity_1.Site)
], Department.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_entity_1.Role, (role) => role.site, {
        nullable: true,
    }),
    __metadata("design:type", role_entity_1.Role)
], Department.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.belongToDepartment),
    __metadata("design:type", employee_entity_1.Employee)
], Department.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userDepts),
    __metadata("design:type", user_entity_1.User)
], Department.prototype, "deptCreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => riskAssesment_entity_1.RiskAssessment, (riskAssessment) => riskAssessment.assignedToDepartments, {
        onDelete: 'SET NULL',
        cascade: true,
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Department.prototype, "riskAssessmentsOfDepartment", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)()
], Department);
//# sourceMappingURL=department.entity.js.map