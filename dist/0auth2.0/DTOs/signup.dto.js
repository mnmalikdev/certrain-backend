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
exports.SignUpDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignUpDTO {
}
exports.SignUpDTO = SignUpDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide a valid username' }),
    (0, class_validator_1.IsString)({ message: 'Invalid username. Usernames must be valid string' }),
    (0, swagger_1.ApiProperty)({
        description: 'Display Name',
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide a valid business name' }),
    (0, class_validator_1.IsString)({
        message: 'Invalid business name. business name must be valid string',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'business name of user',
        example: 'Lex_Corp',
    }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide a valid email' }),
    (0, class_validator_1.IsString)({ message: 'Please provide email as a string' }),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ example: '_@_.com' }),
    __metadata("design:type", String)
], SignUpDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please provide a valid Password' }),
    (0, class_validator_1.IsString)({ message: 'Invalid Password. must be valid string' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be 6 characters atleast' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpDTO.prototype, "password", void 0);
//# sourceMappingURL=signup.dto.js.map