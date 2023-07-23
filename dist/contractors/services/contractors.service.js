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
exports.ContractorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contractor_entity_1 = require("../entities/contractor.entity");
const uuid_1 = require("uuid");
let ContractorService = exports.ContractorService = class ContractorService {
    constructor(contractorRepository) {
        this.contractorRepository = contractorRepository;
    }
    async createContractor(userId, createContractorDTO) {
        const newContractor = new contractor_entity_1.Contractor();
        newContractor.contractorId = (0, uuid_1.v4)();
        newContractor.name = createContractorDTO.name;
        newContractor.description = createContractorDTO.description;
        newContractor.personInCharge = createContractorDTO.personInCharge;
        newContractor.roleOfContractor = {
            roleId: createContractorDTO.roleId,
        };
        newContractor.personInChargeEmail = createContractorDTO.personInChargeEmail;
        newContractor.personInChargePhone = createContractorDTO.personInChargePhone;
        newContractor.address = createContractorDTO.address;
        newContractor.VAT = createContractorDTO.VAT;
        newContractor.docsRequiredWithin = createContractorDTO.docsRequiredWithin;
        newContractor.requestedDocumentation =
            createContractorDTO.requestedDocumentation;
        newContractor.site = { siteId: createContractorDTO.siteId };
        newContractor.contractorCreatedBy = { userId: userId };
        await this.contractorRepository.save(newContractor);
        return newContractor;
    }
    async getContractorById(userId, contractorId) {
        const contractor = await this.contractorRepository.findOne({
            where: {
                contractorCreatedBy: { userId: userId },
                contractorId,
            },
            relations: ['site', 'roleOfContractor'],
        });
        if (!contractor) {
            throw new common_1.NotFoundException('Contractor not found');
        }
        return contractor;
    }
    async getAllContractors(userId) {
        return this.contractorRepository.find({
            where: {
                contractorCreatedBy: { userId: userId },
            },
            relations: ['site', 'roleOfContractor'],
        });
    }
    async updateContractor(userId, contractorId, updateContractorDTO) {
        const contractor = await this.contractorRepository.findOne({
            where: {
                contractorCreatedBy: { userId: userId },
                contractorId,
            },
        });
        if (!contractor) {
            throw new common_1.NotFoundException('Contractor not found');
        }
        if (updateContractorDTO.name) {
            contractor.name = updateContractorDTO.name;
        }
        if (updateContractorDTO.description) {
            contractor.description = updateContractorDTO.description;
        }
        if (updateContractorDTO.personInCharge) {
            contractor.personInCharge = updateContractorDTO.personInCharge;
        }
        if (updateContractorDTO.roleId) {
            contractor.roleOfContractor = {
                roleId: updateContractorDTO.roleId,
            };
        }
        if (updateContractorDTO.personInChargeEmail) {
            contractor.personInChargeEmail = updateContractorDTO.personInChargeEmail;
        }
        if (updateContractorDTO.personInChargePhone) {
            contractor.personInChargePhone = updateContractorDTO.personInChargePhone;
        }
        if (updateContractorDTO.address) {
            contractor.address = updateContractorDTO.address;
        }
        if (updateContractorDTO.VAT) {
            contractor.VAT = updateContractorDTO.VAT;
        }
        if (updateContractorDTO.docsRequiredWithin) {
            contractor.docsRequiredWithin = updateContractorDTO.docsRequiredWithin;
        }
        if (updateContractorDTO.requestedDocumentation) {
            contractor.requestedDocumentation =
                updateContractorDTO.requestedDocumentation;
        }
        await this.contractorRepository.save(contractor);
        return contractor;
    }
    async deleteContractor(userId, contractorId) {
        const contractor = await this.contractorRepository.findOne({
            where: {
                contractorCreatedBy: { userId: userId },
                contractorId,
            },
        });
        if (!contractor) {
            throw new common_1.NotFoundException('Contractor not found');
        }
        await this.contractorRepository.remove(contractor);
    }
};
exports.ContractorService = ContractorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contractor_entity_1.Contractor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContractorService);
//# sourceMappingURL=contractors.service.js.map