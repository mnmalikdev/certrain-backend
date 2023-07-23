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
exports.Site = void 0;
const swagger_1 = require("@nestjs/swagger");
const assetRegister_entity_1 = require("../../assetRegister/entities/assetRegister.entity");
const contractor_entity_1 = require("../../contractors/entities/contractor.entity");
const department_entity_1 = require("../../departments/entities/department.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const riskAssesment_entity_1 = require("../../RiskAssesment/entities/riskAssesment.entity");
let Site = exports.Site = class Site {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'unique id of site',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Site.prototype, "siteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the site',
        example: 'Example Site',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The address of the site',
        example: '123 Main St, City, Country',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Site.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => department_entity_1.Department, (department) => department.site),
    __metadata("design:type", Array)
], Site.prototype, "departmentOfSite", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contractor_entity_1.Contractor, (contractor) => contractor.site),
    __metadata("design:type", contractor_entity_1.Contractor)
], Site.prototype, "contractors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_entity_1.Role, (role) => role.site),
    __metadata("design:type", role_entity_1.Role)
], Site.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.worksAtSite),
    __metadata("design:type", employee_entity_1.Employee)
], Site.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assetRegister_entity_1.AssetRegister, (assetRegister) => assetRegister.assetsOfSite, { onDelete: 'SET NULL', cascade: true }),
    __metadata("design:type", Array)
], Site.prototype, "assets", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userSites),
    __metadata("design:type", user_entity_1.User)
], Site.prototype, "siteCreatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => riskAssesment_entity_1.RiskAssessment, (riskAssessment) => riskAssessment.assignedToSites, {
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Site.prototype, "riskAssessmentsOfSite", void 0);
exports.Site = Site = __decorate([
    (0, typeorm_1.Entity)()
], Site);
//# sourceMappingURL=site.entity.js.map