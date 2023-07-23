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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("../entities/employee.entity");
const uuid_1 = require("uuid");
let EmployeeService = exports.EmployeeService = class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async createEmployee(userId, createEmployeeDTO) {
        const newEmployee = new employee_entity_1.Employee();
        newEmployee.employeeId = (0, uuid_1.v4)();
        newEmployee.firstName = createEmployeeDTO.firstName;
        newEmployee.surName = createEmployeeDTO.surName;
        newEmployee.empNumber = createEmployeeDTO.employeeNo;
        newEmployee.email = createEmployeeDTO.email;
        newEmployee.phoneNumber = createEmployeeDTO.phoneNumber;
        newEmployee.employmentType = createEmployeeDTO.employmentType;
        newEmployee.employmentStatus = createEmployeeDTO.employmentStatus;
        newEmployee.requestedDocs = createEmployeeDTO.requestedDocs;
        newEmployee.requiredWithin = createEmployeeDTO.requiredWithin;
        newEmployee.worksAtSite = { siteId: createEmployeeDTO.siteId };
        newEmployee.role = { roleId: createEmployeeDTO.roleId };
        newEmployee.employedBy = {
            contractorId: createEmployeeDTO.contractorId,
        };
        newEmployee.belongToDepartment = {
            departmentId: createEmployeeDTO.departmentId,
        };
        newEmployee.employeeCreatedBy = { userId: userId };
        await this.employeeRepository.save(newEmployee);
        return newEmployee;
    }
    async getEmployeeById(userId, employeeId) {
        const employee = await this.employeeRepository.findOne({
            where: {
                employeeCreatedBy: { userId: userId },
                employeeId,
            },
            relations: ['worksAtSite', 'role', 'employedBy', 'belongToDepartment'],
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        return employee;
    }
    async getAllEmployees(userId) {
        return this.employeeRepository.find({
            where: {
                employeeCreatedBy: { userId: userId },
            },
            relations: ['worksAtSite', 'role', 'employedBy', 'belongToDepartment'],
        });
    }
    async updateEmployee(userId, employeeId, updateEmployeeDTO) {
        const employee = await this.employeeRepository.findOne({
            where: {
                employeeCreatedBy: { userId: userId },
                employeeId,
            },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        if (updateEmployeeDTO.firstName) {
            employee.firstName = updateEmployeeDTO.firstName;
        }
        if (updateEmployeeDTO.surName) {
            employee.surName = updateEmployeeDTO.surName;
        }
        if (updateEmployeeDTO.employeeNo) {
            employee.empNumber = updateEmployeeDTO.employeeNo;
        }
        if (updateEmployeeDTO.email) {
            employee.email = updateEmployeeDTO.email;
        }
        if (updateEmployeeDTO.phoneNumber) {
            employee.phoneNumber = updateEmployeeDTO.phoneNumber;
        }
        if (updateEmployeeDTO.employmentType) {
            employee.employmentType = updateEmployeeDTO.employmentType;
        }
        if (updateEmployeeDTO.employmentStatus) {
            employee.employmentStatus = updateEmployeeDTO.employmentStatus;
        }
        if (updateEmployeeDTO.siteId) {
            employee.worksAtSite = { siteId: updateEmployeeDTO.siteId };
        }
        if (updateEmployeeDTO.roleId) {
            employee.role = { roleId: updateEmployeeDTO.roleId };
        }
        if (updateEmployeeDTO.contractorId) {
            employee.employedBy = {
                contractorId: updateEmployeeDTO.contractorId,
            };
        }
        if (updateEmployeeDTO.departmentId) {
            employee.belongToDepartment = {
                departmentId: updateEmployeeDTO.departmentId,
            };
        }
        await this.employeeRepository.save(employee);
        return employee;
    }
    async deleteEmployee(userId, employeeId) {
        const employee = await this.employeeRepository.findOne({
            where: {
                employeeCreatedBy: { userId: userId },
                employeeId,
            },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        await this.employeeRepository.remove(employee);
    }
};
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map