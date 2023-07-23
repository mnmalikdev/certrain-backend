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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/jwt/dist");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const user_entity_1 = require("../entites/user.entity");
const enums_1 = require("../enums");
const mailer_service_1 = require("../../mails/mailer.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(userRepository, jwtService, customMailService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.customMailService = customMailService;
    }
    async hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async parseUser(user) {
        const { password, hashedRt } = user, parsedUser = __rest(user, ["password", "hashedRt"]);
        return parsedUser;
    }
    async getTokens(userId, email, role) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                email,
                role: role,
            }, {
                secret: process.env.AT_SECRET,
                expiresIn: '200d',
            }),
            this.jwtService.signAsync({
                sub: userId,
                email,
                role: role,
            }, {
                secret: process.env.RT_SECRET,
                expiresIn: '7d',
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
    async UpdateRtHash(userId, rt) {
        const hashedRt = await this.hashData(rt);
        const user = await this.userRepository.findOne({
            where: {
                userId: userId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('No such user exists');
        }
        user.hashedRt = hashedRt;
        await this.userRepository.save(user);
    }
    async signUp(signupDTO) {
        const user = await this.userRepository.findOne({
            where: { email: signupDTO.email },
        });
        if (user) {
            throw new common_1.ForbiddenException('email already exists');
        }
        const newUser = new user_entity_1.User();
        newUser.userId = (0, uuid_1.v4)();
        newUser.userName = signupDTO.userName;
        newUser.email = signupDTO.email;
        newUser.businessName = signupDTO.businessName;
        newUser.role = enums_1.Role.ADMIN;
        const hashedPassword = await this.hashData(signupDTO.password);
        newUser.password = hashedPassword;
        await this.customMailService.sendUserConfirmation(newUser.userId, newUser.email, newUser.userName);
        await this.userRepository.save(newUser);
        const tokens = await this.getTokens(newUser.userId, newUser.email, newUser.role);
        await this.UpdateRtHash(newUser.userId, tokens.refresh_token);
        const parsedUser = await this.parseUser(newUser);
        return {
            parsedUser,
            tokens,
        };
    }
    async confirmUserAccount(token) {
        const result = await this.jwtService.verify(token, {
            secret: process.env.VERIFICATION_SECRET,
        });
        if (!result) {
            throw new common_1.ForbiddenException('Token Expired');
        }
        const userId = result.sub;
        const user = await this.userRepository.findOne({
            where: {
                userId: userId,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('Access Denied !');
        }
        user.isVerified = true;
        await this.userRepository.save(user);
    }
    async logIn(loginDTO) {
        const { identifier, password } = loginDTO;
        const user = await this.userRepository.findOne({
            where: [{ email: identifier }, { userName: identifier }],
        });
        if (!user) {
            throw new common_1.NotFoundException('No such user exists');
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            throw new common_1.ForbiddenException('Email or password incorrect');
        }
        if (!user.isVerified) {
            throw new common_1.ForbiddenException('Please verify your account before logging in');
        }
        const tokens = await this.getTokens(user.userId, user.email, user.role);
        await this.UpdateRtHash(user.userId, tokens.refresh_token);
        const parsedUser = await this.parseUser(user);
        return {
            tokens,
            parsedUser,
        };
    }
    async verifyNewCreatedUser(token) {
        try {
            const result = await this.jwtService.verify(token, {
                secret: process.env.VERIFICATION_SECRET,
            });
            if (!result) {
                throw new common_1.ForbiddenException('Token Expired');
            }
            const userId = result.sub;
            const user = await this.userRepository.findOne({
                where: {
                    userId: userId,
                },
            });
            if (!user) {
                throw new common_1.ForbiddenException('Access Denied !');
            }
            user.isVerified = true;
            await this.userRepository.save(user);
        }
        catch (e) {
            throw new common_1.ForbiddenException('Something went wrong during verification !');
        }
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.userRepository.findOne({
            where: { userId: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const rtMatches = await bcrypt.compare(refreshToken, user.hashedRt);
        if (!rtMatches) {
            throw new common_1.ForbiddenException('Access Denied !!');
        }
        const newTokens = await this.getTokens(user.userId, user.email, user.role);
        const parsedUser = await this.parseUser(user);
        return {
            newTokens,
            parsedUser,
        };
    }
    async Logout(userId) {
        const user = await this.userRepository.findOne({
            where: { userId: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        if (user.hashedRt !== null) {
            return await this.userRepository.update({ hashedRt: user.hashedRt }, { hashedRt: null });
        }
    }
    async sendResetPasswordLinkToUserEmail(sendLinkDto) {
        const isUserRegistered = await this.userRepository.findOne({
            where: {
                email: sendLinkDto === null || sendLinkDto === void 0 ? void 0 : sendLinkDto.email,
            },
        });
        if (!isUserRegistered) {
            throw new common_1.ForbiddenException('No such user with this email exists in our system ! ');
        }
        await this.customMailService.sendPasswordResetLink(sendLinkDto.email, isUserRegistered === null || isUserRegistered === void 0 ? void 0 : isUserRegistered.userName);
        return {
            status: 'sucess',
            message: "link sent to user's email",
        };
    }
    async resetUserPassword(token, newPassword) {
        const result = await this.jwtService.verify(token, {
            secret: process.env.VERIFICATION_SECRET,
        });
        const userEmail = result === null || result === void 0 ? void 0 : result.email;
        const user = await this.userRepository.findOne({
            where: {
                email: userEmail,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('No such user exists ! ');
        }
        const hashedPassword = await this.hashData(newPassword);
        user.password = hashedPassword;
        await this.userRepository.save(user);
        return {
            status: 'success ',
            message: 'Password updated.',
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => dist_1.JwtService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.JwtService,
        mailer_service_1.CustomMailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map