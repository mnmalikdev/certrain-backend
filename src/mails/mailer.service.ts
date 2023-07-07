import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomMailService {
  constructor(
    private mailerService: MailerService,
    @Inject(forwardRef(() => JwtService))
    private jwtService: JwtService,
  ) {}

  async sendUserConfirmation(userId: string, email: string, userName: string) {
    const token = await this.jwtService.signAsync(
      {
        email,
        sub: userId,
      },
      {
        secret: process.env.VERIFICATION_SECRET,
        expiresIn: '7d',
      },
    );
    const url = `${process.env.BASE_URL_FRONTEND}auth/verifyUser?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Certrain! Please Confirm your Email',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: userName,
        url,
      },
    });
  }

  async sendPasswordResetLink(email: string, userName: string) {
    const token = await this.jwtService.signAsync(
      {
        email,
      },
      {
        secret: process.env.VERIFICATION_SECRET,
        expiresIn: '7d',
      },
    );
    const url = `${process.env.BASE_URL_FRONTEND}auth/resetPassword?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Reset Your Certrain Password',
      template: 'resetPasswordLink', // `.hbs` extension is appended automatically
      context: {
        name: userName,
        url,
      },
    });
  }
}
