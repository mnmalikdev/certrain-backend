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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("../DTOs/login.dto");
const signup_dto_1 = require("../DTOs/signup.dto");
const auth_service_1 = require("../services/auth.service");
const sendPasswordResetLink_dto_1 = require("../DTOs/sendPasswordResetLink.dto");
const resetPassword_dto_1 = require("../DTOs/resetPassword.dto");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(signupDTO) {
        return await this.authService.signUp(signupDTO);
    }
    async logIn(loginDTO) {
        return await this.authService.logIn(loginDTO);
    }
    async refreshToken(req) {
        const user = req.user;
        const tokens = req['tokens'];
        return await this.authService.refreshTokens(user['sub'], tokens['refreshToken']);
    }
    async verifyUser(token) {
        await this.authService.verifyNewCreatedUser(token);
        return { status: 'Success', message: 'User verified ' };
    }
    async sendResetPasswordLink(sendLinkDto) {
        return this.authService.sendResetPasswordLinkToUserEmail(sendLinkDto);
    }
    async resetPassword(newPasswordDto) {
        return this.authService.resetUserPassword(newPasswordDto.token, newPasswordDto.password);
    }
    async logOut(req) {
        return await this.authService.Logout(req.user['sub']);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOkResponse)({
        description: 'User has been created',
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new user and generate his access and refresh tokens',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignUpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'User logs in / authenticated with access and refres tokens',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'login using email and password' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LogInDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
__decorate([
    (0, common_1.Post)('/refresh'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt-refresh')),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Generate new tokens' }),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Refresh token . Example "Bearer {token}"',
        example: 'Bearer <token>',
        allowEmptyValue: false,
        required: true,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('/verifyUser'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Endpoint to verify a user after signing up' }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyUser", null);
__decorate([
    (0, common_1.Post)('sendResetPasswordLink'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sendPasswordResetLink_dto_1.SendPasswordResetLinkDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendResetPasswordLink", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassword_dto_1.ResetPasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'nullifies user tokens and log out of app',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'user access to app is suspended' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map