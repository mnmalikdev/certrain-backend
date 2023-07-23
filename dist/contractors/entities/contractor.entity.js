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
exports.Contractor = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
let Contractor = exports.Contractor = class Contractor {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique ID of the contractor',
    }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Contractor.prototype, "contractorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the contractor',
        example: 'Example Contractor',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the contractor',
        example: 'Contractor description',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The person in charge of the contractor',
        example: 'John Doe',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "personInCharge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email of the person in charge',
        example: 'john.doe@example.com',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "personInChargeEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The phone number of the person in charge',
        example: '123-456-7890',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "personInChargePhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The address of the contractor',
        example: '123 Main St, City, Country',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The VAT (Value Added Tax) of the contractor',
        example: '123456789',
        required: false,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "VAT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The documents required within',
        example: '7 days',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "docsRequiredWithin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The requested documentation',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contractor.prototype, "requestedDocumentation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.contractors, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", site_entity_1.Site)
], Contractor.prototype, "site", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entity_1.Employee, (employee) => employee.employedBy),
    __metadata("design:type", Array)
], Contractor.prototype, "employeesEmployed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.contractorHasRole, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", role_entity_1.Role)
], Contractor.prototype, "roleOfContractor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userContractors),
    __metadata("design:type", user_entity_1.User)
], Contractor.prototype, "contractorCreatedBy", void 0);
exports.Contractor = Contractor = __decorate([
    (0, typeorm_1.Entity)()
], Contractor);
//# sourceMappingURL=contractor.entity.js.map