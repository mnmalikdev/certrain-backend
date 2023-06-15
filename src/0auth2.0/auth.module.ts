//auth module
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { User } from './entites/user.entity';
import { AuthService } from './services/auth.service';
import { AtStrategy, RtStrategy } from './stratergies';
import { CustomMailService } from 'src/mails/mailer.service';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AtStrategy, RtStrategy, AuthService, CustomMailService],
})
export class AuthModule {}
