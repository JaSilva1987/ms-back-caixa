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
exports.ReleaseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const release_service_1 = require("./release.service");
const http_exception_dto_1 = require("../../filters/http-exception.dto");
const release_dto_1 = require("./dto/release.dto");
let ReleaseController = class ReleaseController {
    constructor(releaseService) {
        this.releaseService = releaseService;
    }
    getAllRelease() {
        return this.releaseService.getAllRelease();
    }
    getReleasebyId(id) {
        return this.releaseService.getReleasebyId(id);
    }
    putReleasebyId(id, release) {
        return this.releaseService.updateRelease(id, release);
    }
    async postRelease(release) {
        return this.releaseService.createRealease(release);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Retorna Lançamentos" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true, type: release_dto_1.ReleaseDTO }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "getAllRelease", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Retorna Lançamentos por Identificador" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Código Identificador" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true, type: release_dto_1.ReleaseDTO }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "getReleasebyId", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Atualiza Lançamentos por Identificador" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Código Identificador" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true, type: release_dto_1.ReleaseDTO }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, release_dto_1.ReleaseDTO]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "putReleasebyId", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Post Ranking Fii" }),
    (0, swagger_1.ApiBody)({ required: true, type: release_dto_1.ReleaseDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, type: release_dto_1.ReleaseDTO }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [release_dto_1.ReleaseDTO]),
    __metadata("design:returntype", Promise)
], ReleaseController.prototype, "postRelease", null);
ReleaseController = __decorate([
    (0, swagger_1.ApiTags)("Releases"),
    (0, common_1.Controller)("Releases"),
    __metadata("design:paramtypes", [release_service_1.ReleaseService])
], ReleaseController);
exports.ReleaseController = ReleaseController;
//# sourceMappingURL=release.controller.js.map