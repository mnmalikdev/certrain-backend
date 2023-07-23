"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskAssessmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const riskAssesment_entity_1 = require("./entities/riskAssesment.entity");
const riskAssessment_service_1 = require("./services/riskAssessment.service");
const riskAssesment_controller_1 = require("./controllers/riskAssesment.controller");
let RiskAssessmentModule = exports.RiskAssessmentModule = class RiskAssessmentModule {
};
exports.RiskAssessmentModule = RiskAssessmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([riskAssesment_entity_1.RiskAssessment])],
        providers: [riskAssessment_service_1.RiskAssessmentService],
        controllers: [riskAssesment_controller_1.RiskAssessmentController],
    })
], RiskAssessmentModule);
//# sourceMappingURL=riskAssesment.module.js.map