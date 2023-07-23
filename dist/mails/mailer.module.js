"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mailer_service_1 = require("./mailer.service");
const path_1 = require("path");
let MailModule = exports.MailModule = class MailModule {
};
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp-relay.sendinblue.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'certrainsystems@gmail.com',
                        pass: 'xsmtpsib-7ac4b54233824cea87c96ef28ca3b09377b297b784bf478a97acb6da6528a53c-JkdgK2C16BEWfObT',
                    },
                },
                defaults: {
                    from: 'certrainsystems@gmail.com',
                },
                template: {
                    dir: (0, path_1.join)(__dirname, './templates'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        providers: [mailer_service_1.CustomMailService, jwt_1.JwtService],
        exports: [mailer_service_1.CustomMailService],
    })
], MailModule);
//# sourceMappingURL=mailer.module.js.map