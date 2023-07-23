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
exports.ResetPasswordDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResetPasswordDTO {
}
exports.ResetPasswordDTO = ResetPasswordDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide a valid Password' }),
    (0, class_validator_1.IsString)({ message: 'Invalid Password. must be valid string' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be 6 characters atleast' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResetPasswordDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide token' }),
    (0, class_validator_1.IsString)({ message: 'Invalid token . please provide as string' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResetPasswordDTO.prototype, "token", void 0);
//# sourceMappingURL=resetPassword.dto.js.map