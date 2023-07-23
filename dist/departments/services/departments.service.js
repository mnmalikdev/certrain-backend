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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("../entities/department.entity");
const uuid_1 = require("uuid");
let DepartmentService = exports.DepartmentService = class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async createDepartment(userId, createDepartmentDTO) {
        const newDepartment = new department_entity_1.Department();
        newDepartment.departmentId = (0, uuid_1.v4)();
        newDepartment.name = createDepartmentDTO.name;
        newDepartment.phoneNumber = createDepartmentDTO.phoneNumber;
        newDepartment.extensionNumber = createDepartmentDTO.extensionNumber;
        newDepartment.site = { siteId: createDepartmentDTO === null || createDepartmentDTO === void 0 ? void 0 : createDepartmentDTO.siteId };
        newDepartment.deptCreatedBy = { userId: userId };
        newDepartment.riskAssessmentsOfDepartment =
            createDepartmentDTO.deptRiskAssessmentIds.map((riskAssessmentId) => ({ riskAssessmentId: riskAssessmentId }));
        await this.departmentRepository.save(newDepartment);
        return newDepartment;
    }
    async findDepartmentById(userId, departmentId) {
        const department = await this.departmentRepository.findOne({
            where: {
                deptCreatedBy: { userId: userId },
                departmentId,
            },
            relations: ['site', 'riskAssessmentsOfDepartment'],
        });
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        return department;
    }
    async findAllDepartments(userId) {
        return this.departmentRepository.find({
            where: {
                deptCreatedBy: { userId: userId },
            },
            relations: {
                site: true,
                riskAssessmentsOfDepartment: true,
            },
        });
    }
    async updateDepartment(userId, departmentId, updateDepartmentDTO) {
        const department = await this.findDepartmentById(userId, departmentId);
        Object.assign(department, updateDepartmentDTO);
        if (updateDepartmentDTO === null || updateDepartmentDTO === void 0 ? void 0 : updateDepartmentDTO.siteId) {
            department.site = { siteId: updateDepartmentDTO === null || updateDepartmentDTO === void 0 ? void 0 : updateDepartmentDTO.siteId };
        }
        if (updateDepartmentDTO.deptRiskAssessmentIds) {
            department.riskAssessmentsOfDepartment =
                updateDepartmentDTO.deptRiskAssessmentIds.map((riskAssessmentId) => ({ riskAssessmentId: riskAssessmentId }));
        }
        await this.departmentRepository.save(department);
        return department;
    }
    async deleteDepartment(userId, departmentId) {
        const department = await this.findDepartmentById(userId, departmentId);
        await this.departmentRepository.remove(department);
    }
};
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartmentService);
//# sourceMappingURL=departments.service.js.map