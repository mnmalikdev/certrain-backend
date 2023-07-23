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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const departments_service_1 = require("../services/departments.service");
const createDepartment_dto_1 = require("../DTOs/createDepartment.dto");
const department_entity_1 = require("../entities/department.entity");
const updateDepartment_dto_1 = require("../DTOs/updateDepartment.dto");
const passport_1 = require("@nestjs/passport");
let DepartmentController = exports.DepartmentController = class DepartmentController {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    async createDepartment(req, createDepartmentDTO) {
        try {
            const newDepartment = await this.departmentService.createDepartment(req.user['sub'], createDepartmentDTO);
            return newDepartment;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async deleteDepartment(req, departmentId) {
        try {
            await this.departmentService.deleteDepartment(req.user['sub'], departmentId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findDepartmentById(req, departmentId) {
        try {
            const department = await this.departmentService.findDepartmentById(req.user['sub'], departmentId);
            return department;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAllDepartments(req) {
        const departments = await this.departmentService.findAllDepartments(req.user['sub']);
        return departments;
    }
    async updateDepartment(req, departmentId, updateDepartmentDTO) {
        try {
            const updatedDepartment = await this.departmentService.updateDepartment(req.user['sub'], departmentId, updateDepartmentDTO);
            return updatedDepartment;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Post)('createDepartment'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Creates a new department',
        type: department_entity_1.Department,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createDepartment_dto_1.CreateDepartmentDTO]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "createDepartment", null);
__decorate([
    (0, common_1.Delete)('deleteDepartment/:departmentId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Deletes a department',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "deleteDepartment", null);
__decorate([
    (0, common_1.Get)('fetchDepartment/:departmentId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves a department by ID',
        type: department_entity_1.Department,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findDepartmentById", null);
__decorate([
    (0, common_1.Get)('/fetchAllDepartments'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves all departments',
        type: [department_entity_1.Department],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAllDepartments", null);
__decorate([
    (0, common_1.Patch)('updateDepartment/:departmentId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updates a department',
        type: department_entity_1.Department,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('departmentId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateDepartment_dto_1.UpdateDepartmentDTO]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateDepartment", null);
exports.DepartmentController = DepartmentController = __decorate([
    (0, swagger_1.ApiTags)('Departments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('departments'),
    __metadata("design:paramtypes", [departments_service_1.DepartmentService])
], DepartmentController);
//# sourceMappingURL=departments.controller.js.map