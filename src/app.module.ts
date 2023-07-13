import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './0auth2.0/auth.module';
import { RolesModule } from './roles/roles.module';
import { MailModule } from './mails/mailer.module';
import { ContractorModule } from './contractors/contractors.module';
import { EmployeesModule } from './employees/employees.module';
import { AssetRegisterModule } from './assetRegister/assetRegister.module';
import { RiskAssessmentModule } from './RiskAssesment/riskAssesment.module';
@Module({
  imports: [
    SitesModule,
    DepartmentsModule,
    AuthModule,
    RolesModule,
    MailModule,
    ContractorModule,
    EmployeesModule,
    AssetRegisterModule,
    RiskAssessmentModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
