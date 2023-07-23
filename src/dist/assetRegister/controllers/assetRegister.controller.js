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
exports.AssetRegisterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const createAssetRegister_dto_1 = require("../DTOs/createAssetRegister.dto");
const assetRegister_service_1 = require("../services/assetRegister.service");
const updateAssetRegister_dto_1 = require("../DTOs/updateAssetRegister.dto");
const passport_1 = require("@nestjs/passport");
let AssetRegisterController = exports.AssetRegisterController = class AssetRegisterController {
    constructor(assetRegisterService) {
        this.assetRegisterService = assetRegisterService;
    }
    async createAssetRegister(req, files, payload) {
        return await this.assetRegisterService.createAssetRegister(req.user['sub'], payload, files);
    }
    async deleteAssetRegister(req, assetId) {
        try {
            await this.assetRegisterService.deleteAssetRegister(req.user['sub'], assetId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Asset Register not found');
            }
            throw error;
        }
    }
    async updateAssetRegister(req, assetId, files, dto) {
        return await this.assetRegisterService.updateAssetRegister(req.user['sub'], assetId, dto, files);
    }
    async fetchSingleAsset(req, assetId) {
        const asset = await this.assetRegisterService.getAssetRegister(req.user['sub'], assetId);
        if (!asset) {
            throw new common_1.NotFoundException('Asset Register not found');
        }
        return asset;
    }
    async fetchAllAssets(req) {
        return this.assetRegisterService.getAllAssetRegisters(req.user['sub']);
    }
};
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('/createAssetRegister'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to create asset  ' }),
    (0, swagger_1.ApiBody)({
        description: 'DTO for uploading skills',
        type: createAssetRegister_dto_1.CreateAssetRegisterDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'internalInspectionForm', maxCount: 1 },
        { name: 'documents', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, createAssetRegister_dto_1.CreateAssetRegisterDto]),
    __metadata("design:returntype", Promise)
], AssetRegisterController.prototype, "createAssetRegister", null);
__decorate([
    (0, common_1.Delete)('deleteAsset/:assetId'),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to delete asset  ' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AssetRegisterController.prototype, "deleteAssetRegister", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Patch)('updateAssetRegister/:assetId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to update asset ' }),
    (0, swagger_1.ApiBody)({
        description: 'DTO for updating asset register',
        type: updateAssetRegister_dto_1.UpdateAssetRegisterDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'internalInspectionForm', maxCount: 1 },
        { name: 'documents', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('assetId')),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, updateAssetRegister_dto_1.UpdateAssetRegisterDto]),
    __metadata("design:returntype", Promise)
], AssetRegisterController.prototype, "updateAssetRegister", null);
__decorate([
    (0, common_1.Get)('fetchAsset/:assetId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to fetch asset ' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AssetRegisterController.prototype, "fetchSingleAsset", null);
__decorate([
    (0, common_1.Get)('fetchAllAssets'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to fetch all assets ' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssetRegisterController.prototype, "fetchAllAssets", null);
exports.AssetRegisterController = AssetRegisterController = __decorate([
    (0, common_1.Controller)('asset-register'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiTags)('asset-register'),
    __metadata("design:paramtypes", [assetRegister_service_1.AssetRegisterService])
], AssetRegisterController);
//# sourceMappingURL=assetRegister.controller.js.map