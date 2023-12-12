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
exports.ReleaseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReleaseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Identificador", type: Number }),
    __metadata("design:type", Number)
], ReleaseDTO.prototype, "ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Tipo",
        examples: ["RECEBER", "PAGAR"],
        type: String,
        maxLength: 10,
    }),
    __metadata("design:type", String)
], ReleaseDTO.prototype, "TIPO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Descrição",
        type: String,
        maxLength: 200,
    }),
    __metadata("design:type", String)
], ReleaseDTO.prototype, "DESCRICAO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data de Vencimento", type: Date }),
    __metadata("design:type", Date)
], ReleaseDTO.prototype, "DATAVENCTO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Valor", type: Number }),
    __metadata("design:type", Number)
], ReleaseDTO.prototype, "VALOR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data de Criação", type: Date }),
    __metadata("design:type", Date)
], ReleaseDTO.prototype, "DATACRACAO", void 0);
exports.ReleaseDTO = ReleaseDTO;
//# sourceMappingURL=release.dto.js.map