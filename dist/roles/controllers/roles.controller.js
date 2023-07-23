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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_service_1 = require("../services/role.service");
const role_entity_1 = require("../entities/role.entity");
const createRole_dto_1 = require("../DTOs/createRole.dto");
const updateRole_dto_1 = require("../DTOs/updateRole.dto");
const passport_1 = require("@nestjs/passport");
let RolesController = exports.RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(req, createRoleDTO) {
        try {
            const newRole = await this.roleService.createRole(req.user['sub'], createRoleDTO);
            return newRole;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async getRoleById(req, roleId) {
        try {
            const role = await this.roleService.findRoleById(req.user['sub'], roleId);
            return role;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getAllRoles(req) {
        try {
            const roles = await this.roleService.findAllRoles(req.user['sub']);
            return roles;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteRole(req, roleId) {
        try {
            await this.roleService.deleteRole(req.user['sub'], roleId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateRole(req, roleId, updateRoleDto) {
        try {
            const newRole = await this.roleService.updateRole(req.user['sub'], roleId, updateRoleDto);
            return newRole;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
__decorate([
    (0, common_1.Post)('createRole'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Creates a new role',
        type: role_entity_1.Role,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createRole_dto_1.CreateRoleDTO]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)('fetchRole/:roleId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves a role by ID',
        type: role_entity_1.Role,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRoleById", null);
__decorate([
    (0, common_1.Get)('fetchAllRoles'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves all roles',
        type: [role_entity_1.Role],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getAllRoles", null);
__decorate([
    (0, common_1.Delete)('deleteRole/:roleId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Deletes a role',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "deleteRole", null);
__decorate([
    (0, common_1.Patch)('updateRole/:roleId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'update existing role',
        type: role_entity_1.Role,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('roleId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateRole_dto_1.UpdateRoleDTO]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRole", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map