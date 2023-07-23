"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex_date_format = exports.regex_24_hr_time_format = exports.regex_24_hr_format = exports.validationOptions = void 0;
const common_1 = require("@nestjs/common");
const generateErrorMessage = (errorData) => {
    if (errorData.constraints) {
        return Object.values(errorData.constraints).join(', ');
    }
    if (errorData.children && errorData.children.length > 0) {
        const propertyName = errorData.property;
        const nestedError = errorData.children[0];
        return `${propertyName} => ` + generateErrorMessage(nestedError);
    }
    return '';
};
exports.validationOptions = {
    transform: true,
    whitelist: true,
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    exceptionFactory: (errors) => {
        let errorMsg = '';
        if (errors && errors.length > 0) {
            const errorData = errors[0];
            errorMsg = generateErrorMessage(errorData);
        }
        return new common_1.HttpException({
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            error: errorMsg,
            message: errorMsg,
        }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    },
};
exports.regex_24_hr_format = '^(2[0-3]|[01]?[0-9])$';
exports.regex_24_hr_time_format = '^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$';
exports.regex_date_format = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
exports.default = exports.validationOptions;
//# sourceMappingURL=validation-options.js.map