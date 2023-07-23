"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sites_module_1 = require("./sites/sites.module");
const departments_module_1 = require("./departments/departments.module");
const auth_module_1 = require("./0auth2.0/auth.module");
const roles_module_1 = require("./roles/roles.module");
const mailer_module_1 = require("./mails/mailer.module");
const contractors_module_1 = require("./contractors/contractors.module");
const employees_module_1 = require("./employees/employees.module");
const assetRegister_module_1 = require("./assetRegister/assetRegister.module");
const riskAssesment_module_1 = require("./RiskAssesment/riskAssesment.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sites_module_1.SitesModule,
            departments_module_1.DepartmentsModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            mailer_module_1.MailModule,
            contractors_module_1.ContractorModule,
            employees_module_1.EmployeesModule,
            assetRegister_module_1.AssetRegisterModule,
            riskAssesment_module_1.RiskAssessmentModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: ['dist/**/*.entity.js'],
                synchronize: true,
            }),
        ],
        providers: [app_service_1.AppService],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map