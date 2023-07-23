"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contractor_entity_1 = require("./entities/contractor.entity");
const contractors_service_1 = require("./services/contractors.service");
const contractors_controller_1 = require("./controllers/contractors.controller");
let ContractorModule = exports.ContractorModule = class ContractorModule {
};
exports.ContractorModule = ContractorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contractor_entity_1.Contractor])],
        providers: [contractors_service_1.ContractorService],
        controllers: [contractors_controller_1.ContractorsController],
    })
], ContractorModule);
//# sourceMappingURL=contractors.module.js.map