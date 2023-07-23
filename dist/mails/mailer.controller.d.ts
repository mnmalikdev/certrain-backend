import { CustomMailService } from './mailer.service';
export declare class MailerController {
    private readonly mailerService;
    constructor(mailerService: CustomMailService);
    sendEmail(): Promise<void>;
}
