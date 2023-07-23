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
exports.ContractorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contractors_service_1 = require("../services/contractors.service");
const contractor_entity_1 = require("../entities/contractor.entity");
const createContractor_dto_1 = require("../DTOs/createContractor.dto");
const updateContractor_dto_1 = require("../DTOs/updateContractor.dto");
const passport_1 = require("@nestjs/passport");
let ContractorsController = exports.ContractorsController = class ContractorsController {
    constructor(contractorService) {
        this.contractorService = contractorService;
    }
    async createContractor(req, createContractorDTO) {
        try {
            const newContractor = await this.contractorService.createContractor(req.user['sub'], createContractorDTO);
            return newContractor;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async getContractorById(req, id) {
        try {
            const contractor = await this.contractorService.getContractorById(req.user['sub'], id);
            return contractor;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getAllContractors(req) {
        return this.contractorService.getAllContractors(req.user['sub']);
    }
    async updateContractor(req, id, updateContractorDTO) {
        try {
            const updatedContractor = await this.contractorService.updateContractor(req.user['sub'], id, updateContractorDTO);
            return updatedContractor;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteContractor(req, id) {
        try {
            await this.contractorService.deleteContractor(req.user['sub'], id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Post)('createContractor'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Creates a new contractor',
        type: contractor_entity_1.Contractor,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createContractor_dto_1.CreateContractorDTO]),
    __metadata("design:returntype", Promise)
], ContractorsController.prototype, "createContractor", null);
__decorate([
    (0, common_1.Get)('fetchContractor/:contractorId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Get a contractor by ID',
        type: contractor_entity_1.Contractor,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('contractorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContractorsController.prototype, "getContractorById", null);
__decorate([
    (0, common_1.Get)('/fetchAllContractors'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Get all contractors',
        type: contractor_entity_1.Contractor,
        isArray: true,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContractorsController.prototype, "getAllContractors", null);
__decorate([
    (0, common_1.Patch)('updateContractor/:contractorId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Update a contractor',
        type: contractor_entity_1.Contractor,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('contractorId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateContractor_dto_1.UpdateContractorDTO]),
    __metadata("design:returntype", Promise)
], ContractorsController.prototype, "updateContractor", null);
__decorate([
    (0, common_1.Delete)('deleteContractor/:contractorId'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Delete a contractor',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('contractorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContractorsController.prototype, "deleteContractor", null);
exports.ContractorsController = ContractorsController = __decorate([
    (0, swagger_1.ApiTags)('Contractors'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('contractors'),
    __metadata("design:paramtypes", [contractors_service_1.ContractorService])
], ContractorsController);
//# sourceMappingURL=contractors.controller.js.map