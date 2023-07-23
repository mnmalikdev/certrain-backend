import { Request } from 'express';
import { LogInDTO } from '../DTOs/login.dto';
import { SignUpDTO } from '../DTOs/signup.dto';
import { AuthService } from '../services/auth.service';
import { SendPasswordResetLinkDTO } from '../DTOs/sendPasswordResetLink.dto';
import { ResetPasswordDTO } from '../DTOs/resetPassword.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signupDTO: SignUpDTO): Promise<{
        parsedUser: {
            userId: string;
            userName: string;
            businessName: string;
            email: string;
            isVerified: boolean;
            role: import("../enums").Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: import("../enums").Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logIn(loginDTO: LogInDTO): Promise<{
        tokens: {
            access_token: string;
            refresh_token: string;
        };
        parsedUser: {
            userId: string;
            userName: string;
            businessName: string;
            email: string;
            isVerified: boolean;
            role: import("../enums").Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: import("../enums").Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
    }>;
    refreshToken(req: Request): Promise<{
        newTokens: {
            access_token: string;
            refresh_token: string;
        };
        parsedUser: {
            userId: string;
            userName: string;
            businessName: string;
            email: string;
            isVerified: boolean;
            role: import("../enums").Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: import("../enums").Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
    }>;
    verifyUser(token: string): Promise<{
        status: string;
        message: string;
    }>;
    sendResetPasswordLink(sendLinkDto: SendPasswordResetLinkDTO): Promise<{
        status: string;
        message: string;
    }>;
    resetPassword(newPasswordDto: ResetPasswordDTO): Promise<{
        status: string;
        message: string;
    }>;
    logOut(req: Request): Promise<import("typeorm").UpdateResult>;
}
