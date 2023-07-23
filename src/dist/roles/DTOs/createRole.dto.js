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
exports.CreateRoleDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRoleDTO {
}
exports.CreateRoleDTO = CreateRoleDTO;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide name of role as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide name of role ' }),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the role',
        example: 'Example Role',
    }),
    __metadata("design:type", String)
], CreateRoleDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Please provide description of role as a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide description of role ' }),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the role',
    }),
    __metadata("design:type", String)
], CreateRoleDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide site id for role to be associated with as string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'siteId',
    }),
    __metadata("design:type", String)
], CreateRoleDTO.prototype, "siteId", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Please provide department id for role to be associated with as string',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'departmentId',
    }),
    __metadata("design:type", String)
], CreateRoleDTO.prototype, "departmentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'Responsibilities of the role',
    }),
    __metadata("design:type", String)
], CreateRoleDTO.prototype, "responsibilities", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'create a risk assessment with role',
    }),
    __metadata("design:type", Array)
], CreateRoleDTO.prototype, "roleRiskAssessmentIds", void 0);
//# sourceMappingURL=createRole.dto.js.map