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
exports.SiteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sites_service_1 = require("../services/sites.service");
const createSite_dto_1 = require("../DTOs/createSite.dto");
const site_entity_1 = require("../entities/site.entity");
const updateSite_dto_1 = require("../DTOs/updateSite.dto");
const passport_1 = require("@nestjs/passport");
let SiteController = exports.SiteController = class SiteController {
    constructor(siteService) {
        this.siteService = siteService;
    }
    async createSite(req, createSiteDTO) {
        try {
            const newSite = await this.siteService.createSite(req.user['sub'], createSiteDTO);
            return newSite;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async deleteSite(req, siteId) {
        try {
            await this.siteService.deleteSite(req.user['sub'], siteId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findSiteById(req, siteId) {
        try {
            const site = await this.siteService.findSiteById(req.user['sub'], siteId);
            return site;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAllSites(req) {
        const sites = await this.siteService.findAllSites(req.user['sub']);
        return sites;
    }
    async updateSite(req, siteId, updateSiteDTO) {
        try {
            const newSite = await this.siteService.updateSite(req.user['sub'], siteId, updateSiteDTO);
            return newSite;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
__decorate([
    (0, common_1.Post)('createSite'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Creates a new site',
        type: site_entity_1.Site,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createSite_dto_1.CreateSiteDTO]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "createSite", null);
__decorate([
    (0, common_1.Delete)('deleteSite/:siteId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Deletes a site',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('siteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "deleteSite", null);
__decorate([
    (0, common_1.Get)('fetchSite/:siteId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves a site by ID',
        type: site_entity_1.Site,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('siteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "findSiteById", null);
__decorate([
    (0, common_1.Get)('/fetchAllSites'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Retrieves all sites',
        type: [site_entity_1.Site],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "findAllSites", null);
__decorate([
    (0, common_1.Patch)('updateSite/:siteId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'updates an existing siteId',
        type: site_entity_1.Site,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('siteId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateSite_dto_1.UpdateSiteDTO]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "updateSite", null);
exports.SiteController = SiteController = __decorate([
    (0, swagger_1.ApiTags)('Sites'),
    (0, common_1.Controller)('sites'),
    __metadata("design:paramtypes", [sites_service_1.SiteService])
], SiteController);
//# sourceMappingURL=sites.controller.js.map