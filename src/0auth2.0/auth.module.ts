import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './controllers/auth.controller';
import { User } from './entites/user.entity';

import { AuthService } from './services/auth.service';
import { AtStrategy, RtStrategy } from './stratergies';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AtStrategy, RtStrategy, AuthService],
})
export class AuthModule {}
