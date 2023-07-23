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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSiteDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateSiteDTO {
}
exports.UpdateSiteDTO = UpdateSiteDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'site name must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the site',
        example: 'Example Site',
    }),
    __metadata("design:type", String)
], UpdateSiteDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'site address must be a string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'The address of the site',
        example: '123 Main St, City, Country',
    }),
    __metadata("design:type", String)
], UpdateSiteDTO.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'create a risk assessment site',
    }),
    __metadata("design:type", Array)
], UpdateSiteDTO.prototype, "siteRiskAssessmentIds", void 0);
//# sourceMappingURL=updateSite.dto.js.map