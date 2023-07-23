import { JwtService } from '@nestjs/jwt/dist';
import { Repository } from 'typeorm';
import { LogInDTO } from '../DTOs/login.dto';
import { SignUpDTO } from '../DTOs/signup.dto';
import { User } from '../entites/user.entity';
import { Role } from '../enums';
import { CustomMailService } from 'src/mails/mailer.service';
import { SendPasswordResetLinkDTO } from '../DTOs/sendPasswordResetLink.dto';
export declare class AuthService {
    userRepository: Repository<User>;
    private jwtService;
    private customMailService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, customMailService: CustomMailService);
    hashData(data: string): Promise<any>;
    parseUser(user: User): Promise<{
        userId: string;
        userName: string;
        businessName: string;
        email: string;
        isVerified: boolean;
        role: Role;
        userSites: import("../../sites/entities/site.entity").Site[];
        userDepts: import("../../departments/entities/department.entity").Department[];
        userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
        userRoles: Role[];
        userEmployees: import("../../employees/entities/employee.entity").Employee[];
        userAssets: import("../../employees/entities/employee.entity").Employee[];
        userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
    }>;
    getTokens(userId: string, email: string, role: Role): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    UpdateRtHash(userId: string, rt: string | null): Promise<void>;
    signUp(signupDTO: SignUpDTO): Promise<{
        parsedUser: {
            userId: string;
            userName: string;
            businessName: string;
            email: string;
            isVerified: boolean;
            role: Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    confirmUserAccount(token: string): Promise<void>;
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
            role: Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
    }>;
    verifyNewCreatedUser(token: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
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
            role: Role;
            userSites: import("../../sites/entities/site.entity").Site[];
            userDepts: import("../../departments/entities/department.entity").Department[];
            userContractors: import("../../contractors/entities/contractor.entity").Contractor[];
            userRoles: Role[];
            userEmployees: import("../../employees/entities/employee.entity").Employee[];
            userAssets: import("../../employees/entities/employee.entity").Employee[];
            userRiskAssessments: import("../../RiskAssesment/entities/riskAssesment.entity").RiskAssessment[];
        };
    }>;
    Logout(userId: string): Promise<import("typeorm").UpdateResult>;
    sendResetPasswordLinkToUserEmail(sendLinkDto: SendPasswordResetLinkDTO): Promise<{
        status: string;
        message: string;
    }>;
    resetUserPassword(token: string, newPassword: string): Promise<{
        status: string;
        message: string;
    }>;
}
