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
exports.SiteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const site_entity_1 = require("../entities/site.entity");
const uuid_1 = require("uuid");
let SiteService = exports.SiteService = class SiteService {
    constructor(siteRepository) {
        this.siteRepository = siteRepository;
    }
    async createSite(userId, createSiteDTO) {
        var _a;
        const site = await this.siteRepository.findOne({
            where: {
                address: createSiteDTO === null || createSiteDTO === void 0 ? void 0 : createSiteDTO.address,
                siteCreatedBy: { userId: userId },
            },
        });
        if (site) {
            throw new common_1.ForbiddenException('A site with this address already exists');
        }
        const newSite = new site_entity_1.Site();
        newSite.siteId = (0, uuid_1.v4)();
        newSite.name = createSiteDTO.name;
        newSite.address = createSiteDTO.address;
        newSite.riskAssessmentsOfSite = (_a = createSiteDTO === null || createSiteDTO === void 0 ? void 0 : createSiteDTO.siteRiskAssessmentIds) === null || _a === void 0 ? void 0 : _a.map((riskAssesmentId) => ({ riskAssessmentId: riskAssesmentId }));
        newSite.siteCreatedBy = { userId: userId };
        await this.siteRepository.save(newSite);
        return newSite;
    }
    async findSiteById(userId, siteId) {
        const site = await this.siteRepository.findOne({
            where: {
                siteId,
                siteCreatedBy: { userId: userId },
            },
            relations: ['departmentOfSite', 'riskAssessmentsOfSite'],
        });
        if (!site) {
            throw new common_1.NotFoundException('Site not found');
        }
        return site;
    }
    async findAllSites(userId) {
        return this.siteRepository.find({
            where: {
                siteCreatedBy: { userId: userId },
            },
            relations: ['departmentOfSite', 'riskAssessmentsOfSite'],
        });
    }
    async deleteSite(userId, siteId) {
        const site = await this.siteRepository.findOne({
            where: {
                siteCreatedBy: { userId: userId },
                siteId,
            },
        });
        if (!site) {
            throw new common_1.NotFoundException('Site not found');
        }
        await this.siteRepository.delete({
            siteId: siteId,
        });
    }
    async updateSite(userId, siteId, updateSiteDTO) {
        var _a;
        const site = await this.findSiteById(userId, siteId);
        if (updateSiteDTO.name) {
            site.name = updateSiteDTO.name;
        }
        if (updateSiteDTO.address) {
            site.address = updateSiteDTO.address;
        }
        if (updateSiteDTO.siteRiskAssessmentIds) {
            site.riskAssessmentsOfSite = (_a = updateSiteDTO === null || updateSiteDTO === void 0 ? void 0 : updateSiteDTO.siteRiskAssessmentIds) === null || _a === void 0 ? void 0 : _a.map((riskAssesmentId) => ({ riskAssessmentId: riskAssesmentId }));
        }
        await this.siteRepository.save(site);
        return site;
    }
};
exports.SiteService = SiteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(site_entity_1.Site)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SiteService);
//# sourceMappingURL=sites.service.js.map