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
exports.AssetRegisterService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const assetRegister_entity_1 = require("../entities/assetRegister.entity");
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const typeorm_2 = require("typeorm");
const path = require("path");
let AssetRegisterService = exports.AssetRegisterService = class AssetRegisterService {
    constructor(assetRegisterRepository) {
        this.assetRegisterRepository = assetRegisterRepository;
    }
    async createAssetRegister(userId, dto, files) {
        const assetRegister = new assetRegister_entity_1.AssetRegister();
        assetRegister.assetId = (0, uuid_1.v4)();
        assetRegister.assetNo = dto.assetNo;
        assetRegister.make = dto.make;
        assetRegister.model = dto.model;
        assetRegister.serialNumber = dto.serialNumber;
        assetRegister.yearOfManufacturer = dto.yearOfManufacturer;
        assetRegister.dateInstalled = dto.dateInstalled;
        assetRegister.dateCommissioned = dto.dateCommissioned;
        assetRegister.requiredTraining = dto.requiredTraining;
        assetRegister.riskAssessmentRequired = dto.requiredTraining;
        assetRegister.internalInspectionFrequency = dto.internalInspectionFrequency;
        assetRegister.statutoryInspection = dto.statutoryInspection;
        assetRegister.dateOfStatutoryInspection = dto.dateOfStatutoryInspection;
        assetRegister.area = dto.area;
        assetRegister.assetsOfEmployee = { employeeId: dto.employeeId };
        assetRegister.assetsOfSite = { siteId: dto.siteId };
        assetRegister.riskAssessmentRequired = dto.riskAssessmentRequired;
        assetRegister.assetCreatedBy = { userId: userId };
        const internalInspectionFormFile = files.internalInspectionForm[0];
        if (internalInspectionFormFile) {
            const uploadDir = path.join(__dirname, '..', 'uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const fileExtension = path.extname(internalInspectionFormFile.originalname);
            const fileName = `${(0, uuid_1.v4)()}${fileExtension}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, internalInspectionFormFile.buffer);
            assetRegister.internalInpectionForm = filePath;
        }
        const documentsFile = files.documents[0];
        if (documentsFile) {
            const uploadDir = path.join(__dirname, '..', 'uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const fileExtension = path.extname(documentsFile.originalname);
            const fileName = `${(0, uuid_1.v4)()}${fileExtension}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, documentsFile.buffer);
            assetRegister.documents = filePath;
        }
        return await this.assetRegisterRepository.save(assetRegister);
    }
    async updateAssetRegister(userId, assetId, dto, files) {
        var _a, _b;
        const assetRegister = await this.assetRegisterRepository.findOne({
            where: {
                assetCreatedBy: { userId: userId },
                assetId,
            },
        });
        if (!assetRegister) {
            throw new common_1.NotFoundException('Asset Register not found');
        }
        if (dto.assetNo) {
            assetRegister.assetNo = dto.assetNo;
        }
        if (dto.make) {
            assetRegister.make = dto.make;
        }
        if (dto.model) {
            assetRegister.model = dto.model;
        }
        if (dto.serialNumber) {
            assetRegister.serialNumber = dto.serialNumber;
        }
        if (dto.yearOfManufacturer) {
            assetRegister.yearOfManufacturer = dto.yearOfManufacturer;
        }
        if (dto.dateInstalled) {
            assetRegister.dateInstalled = dto.dateInstalled;
        }
        if (dto.dateCommissioned) {
            assetRegister.dateCommissioned = dto.dateCommissioned;
        }
        if (dto.requiredTraining) {
            assetRegister.requiredTraining = dto.requiredTraining;
        }
        if (dto.internalInspectionFrequency) {
            assetRegister.internalInspectionFrequency =
                dto.internalInspectionFrequency;
        }
        if (dto.statutoryInspection) {
            assetRegister.statutoryInspection = dto.statutoryInspection;
        }
        if (dto.dateOfStatutoryInspection) {
            assetRegister.dateOfStatutoryInspection = dto.dateOfStatutoryInspection;
        }
        if (dto.area) {
            assetRegister.area = dto.area;
        }
        if (dto.siteId) {
            assetRegister.assetsOfSite = { siteId: dto.siteId };
        }
        if (dto.employeeId) {
            assetRegister.assetsOfEmployee = { employeeId: dto.employeeId };
        }
        const internalInspectionFormFile = (_a = files === null || files === void 0 ? void 0 : files.internalInspectionForm) === null || _a === void 0 ? void 0 : _a[0];
        if (internalInspectionFormFile) {
            const uploadDir = path.join(__dirname, '..', 'uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const fileExtension = path.extname(internalInspectionFormFile.originalname);
            const fileName = `${(0, uuid_1.v4)()}${fileExtension}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, internalInspectionFormFile.buffer);
            assetRegister.internalInpectionForm = filePath;
        }
        const documentsFile = (_b = files === null || files === void 0 ? void 0 : files.documents) === null || _b === void 0 ? void 0 : _b[0];
        if (documentsFile) {
            const uploadDir = path.join(__dirname, '..', 'uploads');
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            const fileExtension = path.extname(documentsFile.originalname);
            const fileName = `${(0, uuid_1.v4)()}${fileExtension}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, documentsFile.buffer);
            assetRegister.documents = filePath;
        }
        return await this.assetRegisterRepository.save(assetRegister);
    }
    async deleteAssetRegister(userId, assetId) {
        const assetRegister = await this.assetRegisterRepository.findOne({
            where: {
                assetCreatedBy: { userId: userId },
                assetId,
            },
        });
        if (!assetRegister) {
            throw new common_1.NotFoundException('Asset Register not found');
        }
        if (assetRegister.internalInpectionForm) {
            fs.unlinkSync(assetRegister.internalInpectionForm);
        }
        if (assetRegister.documents) {
            fs.unlinkSync(assetRegister.documents);
        }
        await this.assetRegisterRepository.remove(assetRegister);
    }
    async getAssetRegister(userId, assetId) {
        const asset = await this.assetRegisterRepository.findOne({
            where: {
                assetCreatedBy: { userId: userId },
                assetId,
            },
            relations: ['assetsOfEmployee', 'assetsOfSite'],
        });
        if (!asset) {
            throw new common_1.NotFoundException('Asset Register not found');
        }
        return asset;
    }
    async getAllAssetRegisters(userId) {
        return this.assetRegisterRepository.find({
            where: {
                assetCreatedBy: { userId: userId },
            },
            relations: ['assetsOfEmployee', 'assetsOfSite'],
        });
    }
};
exports.AssetRegisterService = AssetRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assetRegister_entity_1.AssetRegister)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AssetRegisterService);
//# sourceMappingURL=assetRegister.service.js.map