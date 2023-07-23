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
exports.RiskAssessmentController = void 0;
const common_1 = require("@nestjs/common");
const riskAssessment_service_1 = require("../services/riskAssessment.service");
const createRiskAssesment_dto_1 = require("../DTOs/createRiskAssesment.dto");
const updateRiskAssessment_dto_1 = require("../DTOs/updateRiskAssessment.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
let RiskAssessmentController = exports.RiskAssessmentController = class RiskAssessmentController {
    constructor(riskAssessmentService) {
        this.riskAssessmentService = riskAssessmentService;
    }
    async create(req, createRiskAssessmentDTO) {
        return this.riskAssessmentService.createRiskAssessment(req.user['sub'], createRiskAssessmentDTO);
    }
    async findOne(req, id) {
        return this.riskAssessmentService.getRiskAssessmentById(req.user['sub'], id);
    }
    async findAll(req) {
        return this.riskAssessmentService.getAllRiskAssessments(req.user['sub']);
    }
    async update(req, id, updateRiskAssessmentDTO) {
        return this.riskAssessmentService.updateRiskAssessment(req.user['sub'], id, updateRiskAssessmentDTO);
    }
    async remove(req, id) {
        return this.riskAssessmentService.deleteRiskAssessment(req.user['sub'], id);
    }
};
__decorate([
    (0, common_1.Post)('createRiskAssessment'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createRiskAssesment_dto_1.CreateRiskAssessmentDTO]),
    __metadata("design:returntype", Promise)
], RiskAssessmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('fetchRiskAssessment/:riskAssessmentId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('riskAssessmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RiskAssessmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('fetchAllRiskAssessments'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RiskAssessmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('updateRiskAssessment/:riskAssessmentId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('riskAssessmentId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateRiskAssessment_dto_1.UpdateRiskAssessmentDTO]),
    __metadata("design:returntype", Promise)
], RiskAssessmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteRiskAssessment/:riskAssessmentId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('riskAssessmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RiskAssessmentController.prototype, "remove", null);
exports.RiskAssessmentController = RiskAssessmentController = __decorate([
    (0, swagger_1.ApiTags)('risk-assessments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('risk-assessments'),
    __metadata("design:paramtypes", [riskAssessment_service_1.RiskAssessmentService])
], RiskAssessmentController);
//# sourceMappingURL=riskAssesment.controller.js.map