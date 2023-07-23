import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
export declare class CustomMailService {
    private mailerService;
    private jwtService;
    constructor(mailerService: MailerService, jwtService: JwtService);
    sendUserConfirmation(userId: string, email: string, userName: string): Promise<void>;
    sendPasswordResetLink(email: string, userName: string): Promise<void>;
}
