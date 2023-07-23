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
exports.MailerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mailer_service_1 = require("./mailer.service");
let MailerController = exports.MailerController = class MailerController {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendEmail() {
        return await this.mailerService.sendUserConfirmation('id', 'mnmalikdev@gmail.com', 'mnmalik');
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'Email gets send to test user',
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'hit the api trigger',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/sendEmail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MailerController.prototype, "sendEmail", null);
exports.MailerController = MailerController = __decorate([
    (0, swagger_1.ApiTags)('mailer'),
    (0, common_1.Controller)('mailer'),
    __metadata("design:paramtypes", [mailer_service_1.CustomMailService])
], MailerController);
//# sourceMappingURL=mailer.controller.js.map