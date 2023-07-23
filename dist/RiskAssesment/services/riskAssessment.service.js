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
exports.RiskAssessmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const riskAssesment_entity_1 = require("../entities/riskAssesment.entity");
const uuid_1 = require("uuid");
let RiskAssessmentService = exports.RiskAssessmentService = class RiskAssessmentService {
    constructor(riskAssessmentRepository) {
        this.riskAssessmentRepository = riskAssessmentRepository;
    }
    async createRiskAssessment(userId, createRiskAssessmentDTO) {
        const newRiskAssessment = new riskAssesment_entity_1.RiskAssessment();
        newRiskAssessment.riskAssessmentId = (0, uuid_1.v4)();
        console.log(createRiskAssessmentDTO.riskRating);
        newRiskAssessment.refNo = createRiskAssessmentDTO.refNo;
        newRiskAssessment.residualRiskRating =
            createRiskAssessmentDTO.residualRiskRating;
        newRiskAssessment.residualRiskRatingX =
            createRiskAssessmentDTO.residualRiskRatingX;
        newRiskAssessment.residualRiskRatingY =
            createRiskAssessmentDTO.residualRiskRatingY;
        newRiskAssessment.riskRating = createRiskAssessmentDTO.riskRating;
        newRiskAssessment.riskRatingX = createRiskAssessmentDTO.riskRatingX;
        newRiskAssessment.riskRatingY = createRiskAssessmentDTO.riskRatingY;
        newRiskAssessment.hazard = createRiskAssessmentDTO.hazard;
        newRiskAssessment.risk = createRiskAssessmentDTO.risk;
        newRiskAssessment.peopleAtRisk = createRiskAssessmentDTO.peopleAtRisk;
        newRiskAssessment.controls = createRiskAssessmentDTO.controls;
        newRiskAssessment.riskAssessmentCreatedBy = { userId: userId };
        newRiskAssessment.riskAssessmentOwners =
            createRiskAssessmentDTO.riskAssessmentOwnerIds.map((riskAssessmentOwnerId) => ({ employeeId: riskAssessmentOwnerId }));
        newRiskAssessment.riskRatingColor = createRiskAssessmentDTO.riskRatingColor;
        newRiskAssessment.residualRiskRatingColor =
            createRiskAssessmentDTO.residualRiskRatingColor;
        await this.riskAssessmentRepository.save(newRiskAssessment);
        return newRiskAssessment;
    }
    async getRiskAssessmentById(userId, riskAssessmentId) {
        const riskAssessment = await this.riskAssessmentRepository.findOne({
            where: {
                riskAssessmentCreatedBy: { userId: userId },
                riskAssessmentId: riskAssessmentId,
            },
            relations: ['riskAssessmentOwners'],
        });
        if (!riskAssessment) {
            throw new common_1.NotFoundException('Risk Assessment not found');
        }
        return riskAssessment;
    }
    async getAllRiskAssessments(userId) {
        return this.riskAssessmentRepository.find({
            where: {
                riskAssessmentCreatedBy: { userId: userId },
            },
            relations: ['riskAssessmentOwners'],
        });
    }
    async updateRiskAssessment(userId, riskAssessmentId, updateRiskAssessmentDTO) {
        const riskAssessment = await this.riskAssessmentRepository.findOne({
            where: {
                riskAssessmentCreatedBy: { userId: userId },
                riskAssessmentId: riskAssessmentId,
            },
        });
        if (!riskAssessment) {
            throw new common_1.NotFoundException('Risk Assessment not found');
        }
        if (updateRiskAssessmentDTO.residualRiskRating) {
            riskAssessment.residualRiskRating =
                updateRiskAssessmentDTO.residualRiskRating;
        }
        if (updateRiskAssessmentDTO.residualRiskRatingX) {
            riskAssessment.residualRiskRatingX =
                updateRiskAssessmentDTO.residualRiskRatingX;
        }
        if (updateRiskAssessmentDTO.residualRiskRatingY) {
            riskAssessment.residualRiskRatingY =
                updateRiskAssessmentDTO.residualRiskRatingY;
        }
        if (updateRiskAssessmentDTO.riskRating) {
            riskAssessment.riskRating = updateRiskAssessmentDTO.riskRating;
        }
        if (updateRiskAssessmentDTO.riskRatingX) {
            riskAssessment.riskRatingX = updateRiskAssessmentDTO.riskRatingX;
        }
        if (updateRiskAssessmentDTO.riskRatingY) {
            riskAssessment.riskRatingY = updateRiskAssessmentDTO.riskRatingY;
        }
        if (updateRiskAssessmentDTO.risk) {
            riskAssessment.risk = updateRiskAssessmentDTO.risk;
        }
        if (updateRiskAssessmentDTO.hazard) {
            riskAssessment.hazard = updateRiskAssessmentDTO.hazard;
        }
        if (updateRiskAssessmentDTO.peopleAtRisk) {
            riskAssessment.peopleAtRisk = updateRiskAssessmentDTO.peopleAtRisk;
        }
        if (updateRiskAssessmentDTO.controls) {
            riskAssessment.controls = updateRiskAssessmentDTO.controls;
        }
        if (updateRiskAssessmentDTO.riskRatingColor) {
            riskAssessment.riskRatingColor = updateRiskAssessmentDTO.riskRatingColor;
        }
        if (updateRiskAssessmentDTO.residualRiskRatingColor) {
            riskAssessment.riskRatingColor =
                updateRiskAssessmentDTO.residualRiskRatingColor;
        }
        if (updateRiskAssessmentDTO.riskAssessmentOwnerIds) {
            riskAssessment.riskAssessmentOwners =
                updateRiskAssessmentDTO.riskAssessmentOwnerIds.map((riskAssessmentOwnerId) => ({ employeeId: riskAssessmentOwnerId }));
        }
        await this.riskAssessmentRepository.save(riskAssessment);
        return riskAssessment;
    }
    async deleteRiskAssessment(userId, riskAssessmentId) {
        const riskAssessment = await this.riskAssessmentRepository.findOne({
            where: {
                riskAssessmentCreatedBy: { userId: userId },
                riskAssessmentId: riskAssessmentId,
            },
        });
        if (!riskAssessment) {
            throw new common_1.NotFoundException('Risk Assessment not found');
        }
        await this.riskAssessmentRepository.remove(riskAssessment);
    }
};
exports.RiskAssessmentService = RiskAssessmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(riskAssesment_entity_1.RiskAssessment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RiskAssessmentService);
//# sourceMappingURL=riskAssessment.service.js.map