import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomMailService } from './mailer.service';
import { join } from 'path';

// todo: figure out why the transport key value pairs are not accepting values from .env
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        // host: process.env.SENDINBLU_HOST,
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false,
        auth: {
          user: 'certrainsystems@gmail.com',
          pass: 'xsmtpsib-7ac4b54233824cea87c96ef28ca3b09377b297b784bf478a97acb6da6528a53c-JkdgK2C16BEWfObT',
        },
      },
      defaults: {
        from: 'certrainsystems@gmail.com',
      },
      template: {
        dir: join(__dirname, './templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [CustomMailService, JwtService],
  exports: [CustomMailService], // 👈 export for DI-> Dependency Injection
})
export class MailModule {}
