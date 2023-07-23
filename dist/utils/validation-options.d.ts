import { ValidationPipeOptions } from '@nestjs/common';
export declare const validationOptions: ValidationPipeOptions;
export declare const regex_24_hr_format = "^(2[0-3]|[01]?[0-9])$";
export declare const regex_24_hr_time_format = "^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$";
export declare const regex_date_format: RegExp;
export default validationOptions;
