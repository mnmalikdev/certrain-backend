import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesModule } from './sites/sites.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './0auth2.0/auth.module';
@Module({
  imports: [
    SitesModule,
    DepartmentsModule,
    AuthModule,
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
