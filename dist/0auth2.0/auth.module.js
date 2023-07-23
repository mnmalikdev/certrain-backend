"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const auth_controller_1 = require("./controllers/auth.controller");
const user_entity_1 = require("./entites/user.entity");
const auth_service_1 = require("./services/auth.service");
const stratergies_1 = require("./stratergies");
const mailer_service_1 = require("../mails/mailer.service");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({}), typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [auth_controller_1.AuthController],
        providers: [stratergies_1.AtStrategy, stratergies_1.RtStrategy, auth_service_1.AuthService, mailer_service_1.CustomMailService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map