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
exports.AssetRegister = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../0auth2.0/entites/user.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const site_entity_1 = require("../../sites/entities/site.entity");
const typeorm_1 = require("typeorm");
let AssetRegister = exports.AssetRegister = class AssetRegister {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "assetNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "make", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "yearOfManufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "dateInstalled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "dateCommissioned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "requiredTraining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "riskAssessmentRequired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "internalInspectionFrequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "statutoryInspection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AssetRegister.prototype, "dateOfStatutoryInspection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AssetRegister.prototype, "internalInpectionForm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], AssetRegister.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => site_entity_1.Site, (site) => site.assets),
    __metadata("design:type", site_entity_1.Site)
], AssetRegister.prototype, "assetsOfSite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.employeeHasAssets, {
        onDelete: 'SET NULL',
        cascade: true,
    }),
    __metadata("design:type", employee_entity_1.Employee)
], AssetRegister.prototype, "assetsOfEmployee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userAssets),
    __metadata("design:type", user_entity_1.User)
], AssetRegister.prototype, "assetCreatedBy", void 0);
exports.AssetRegister = AssetRegister = __decorate([
    (0, typeorm_1.Entity)()
], AssetRegister);
//# sourceMappingURL=assetRegister.entity.js.map