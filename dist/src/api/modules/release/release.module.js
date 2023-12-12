"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleasesModule = void 0;
const common_1 = require("@nestjs/common");
const release_service_1 = require("./release.service");
const release_controller_1 = require("./release.controller");
const typeorm_1 = require("@nestjs/typeorm");
const release_entity_1 = require("../../../database/entities/release.entity");
let ReleasesModule = class ReleasesModule {
};
ReleasesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([release_entity_1.ReleaseEntity])],
        controllers: [release_controller_1.ReleaseController],
        providers: [release_service_1.ReleaseService],
    })
], ReleasesModule);
exports.ReleasesModule = ReleasesModule;
//# sourceMappingURL=release.module.js.map