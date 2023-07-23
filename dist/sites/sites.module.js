"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const site_entity_1 = require("./entities/site.entity");
const sites_service_1 = require("./services/sites.service");
const sites_controller_1 = require("./controllers/sites.controller");
let SitesModule = exports.SitesModule = class SitesModule {
};
exports.SitesModule = SitesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([site_entity_1.Site])],
        providers: [sites_service_1.SiteService],
        controllers: [sites_controller_1.SiteController],
    })
], SitesModule);
//# sourceMappingURL=sites.module.js.map