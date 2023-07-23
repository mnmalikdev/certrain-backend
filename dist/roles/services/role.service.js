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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../entities/role.entity");
const uuid_1 = require("uuid");
let RoleService = exports.RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async createRole(userId, createRoleDTO) {
        var _a;
        const role = await this.roleRepository.findOne({
            where: {
                roleCreatedBy: { userId: userId },
                name: createRoleDTO === null || createRoleDTO === void 0 ? void 0 : createRoleDTO.name,
            },
        });
        if (role) {
            throw new common_1.ForbiddenException('A role with this name already exists');
        }
        const newRole = new role_entity_1.Role();
        newRole.roleId = (0, uuid_1.v4)();
        newRole.name = createRoleDTO.name;
        newRole.description = createRoleDTO.description;
        newRole.responsibilities = createRoleDTO.responsibilities;
        newRole.site = { siteId: createRoleDTO === null || createRoleDTO === void 0 ? void 0 : createRoleDTO.siteId };
        newRole.department = { departmentId: createRoleDTO === null || createRoleDTO === void 0 ? void 0 : createRoleDTO.departmentId };
        newRole.roleCreatedBy = {
            userId: userId,
        };
        newRole.riskAssessmentsOfRole = (_a = createRoleDTO === null || createRoleDTO === void 0 ? void 0 : createRoleDTO.roleRiskAssessmentIds) === null || _a === void 0 ? void 0 : _a.map((riskAssessmentId) => {
            return { riskAssessmentId: riskAssessmentId };
        });
        await this.roleRepository.save(newRole);
        return newRole;
    }
    async findRoleById(userId, roleId) {
        const role = await this.roleRepository.findOne({
            where: {
                roleCreatedBy: { userId: userId },
                roleId,
            },
            relations: ['site', 'department', 'riskAssessmentsOfRole'],
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return role;
    }
    async findAllRoles(userId) {
        return this.roleRepository.find({
            where: {
                roleCreatedBy: { userId: userId },
            },
            relations: ['site', 'department', 'riskAssessmentsOfRole'],
        });
    }
    async deleteRole(userId, roleId) {
        const role = await this.roleRepository.findOne({
            where: {
                roleCreatedBy: { userId: userId },
                roleId,
            },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        await this.roleRepository.remove(role);
    }
    async updateRole(userId, roleId, updateRoleDTO) {
        var _a;
        const role = await this.findRoleById(userId, roleId);
        if (updateRoleDTO.name) {
            role.name = updateRoleDTO.name;
        }
        if (updateRoleDTO.description) {
            role.description = updateRoleDTO.description;
        }
        if (updateRoleDTO.responsibilities) {
            role.responsibilities = updateRoleDTO.responsibilities;
        }
        if (updateRoleDTO.siteId) {
            role.site = { siteId: updateRoleDTO.siteId };
        }
        if (updateRoleDTO.departmentId) {
            role.department = { departmentId: updateRoleDTO.departmentId };
        }
        if (updateRoleDTO.roleRiskAssessmentIds) {
            role.riskAssessmentsOfRole = (_a = updateRoleDTO === null || updateRoleDTO === void 0 ? void 0 : updateRoleDTO.roleRiskAssessmentIds) === null || _a === void 0 ? void 0 : _a.map((riskAssessmentId) => {
                return { riskAssessmentId: riskAssessmentId };
            });
        }
        await this.roleRepository.save(role);
        return role;
    }
};
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map