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
exports.CustomMailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let CustomMailService = exports.CustomMailService = class CustomMailService {
    constructor(mailerService, jwtService) {
        this.mailerService = mailerService;
        this.jwtService = jwtService;
    }
    async sendUserConfirmation(userId, email, userName) {
        const token = await this.jwtService.signAsync({
            email,
            sub: userId,
        }, {
            secret: process.env.VERIFICATION_SECRET,
            expiresIn: '7d',
        });
        const url = `${process.env.BASE_URL_FRONTEND}auth/verifyUser?token=${token}`;
        await this.mailerService.sendMail({
            to: email,
            subject: 'Welcome to Certrain! Please Confirm your Email',
            template: 'confirmation',
            context: {
                name: userName,
                url,
            },
        });
    }
    async sendPasswordResetLink(email, userName) {
        const token = await this.jwtService.signAsync({
            email,
        }, {
            secret: process.env.VERIFICATION_SECRET,
            expiresIn: '7d',
        });
        const url = `${process.env.BASE_URL_FRONTEND}auth/resetPassword?token=${token}`;
        await this.mailerService.sendMail({
            to: email,
            subject: 'Reset Your Certrain Password',
            template: 'resetPasswordLink',
            context: {
                name: userName,
                url,
            },
        });
    }
};
exports.CustomMailService = CustomMailService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => jwt_1.JwtService))),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        jwt_1.JwtService])
], CustomMailService);
//# sourceMappingURL=mailer.service.js.map