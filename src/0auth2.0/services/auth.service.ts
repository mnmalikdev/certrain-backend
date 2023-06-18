/* eslint-disable prettier/prettier */
import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { LogInDTO } from '../DTOs/login.dto';
import { SignUpDTO } from '../DTOs/signup.dto';
import { User } from '../entites/user.entity';
import { Role } from '../enums';
import { CustomMailService } from 'src/mails/mailer.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) public userRepository: Repository<User>,
    @Inject(forwardRef(() => JwtService))
    private jwtService: JwtService,
    private customMailService: CustomMailService,
  ) {}

  // **************************** jwt based auth**********************************************************

  async hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async parseUser(user: User) {
    const { password, hashedRt, ...parsedUser } = user;
    return parsedUser;
  }

  async getTokens(userId: string, email: string, role: Role) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role: role,
        },
        {
          secret: process.env.AT_SECRET,
          // expiresIn: process.env.AT_EXPIRY,
          expiresIn: '200d',
          //15 minutes
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role: role,
        },
        {
          secret: process.env.RT_SECRET,
          // expiresIn: process.env.RT_EXPIRY,
          expiresIn: '7d',
        },
      ),
    ]);
    // generated rt and at tokens.
    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async UpdateRtHash(userId: string, rt: string | null) {
    const hashedRt = await this.hashData(rt);
    const user = await this.userRepository.findOne({
      where: {
        userId: userId,
      },
    });
    if (!user) {
      throw new NotFoundException('No such user exists');
    }

    user.hashedRt = hashedRt; // Update the hashedRt value in the user object

    await this.userRepository.save(user); // Save the updated user object
  }

  async signUp(signupDTO: SignUpDTO) {
    console.log(signupDTO);
    const user = await this.userRepository.findOne({
      where: { email: signupDTO.email },
    });

    if (user) {
      throw new ForbiddenException('email already exists');
    }

    const newUser = new User();
    newUser.userId = uuidv4();
    newUser.userName = signupDTO.userName;
    newUser.email = signupDTO.email;
    newUser.businessName = signupDTO.businessName;
    newUser.role = Role.ADMIN;
    const hashedPassword = await this.hashData(signupDTO.password);
    newUser.password = hashedPassword;

    // todo: MAKE AN EMAIL SERVICE .
    await this.customMailService.sendUserConfirmation(
      newUser.userId,
      newUser.email,
      newUser.userName,
    );

    await this.userRepository.save(newUser);

    const tokens = await this.getTokens(
      newUser.userId,
      newUser.email,
      newUser.role,
    );
    await this.UpdateRtHash(newUser.userId, tokens.refresh_token);

    const parsedUser = await this.parseUser(newUser);

    return {
      parsedUser,
      tokens,
    };
  }

  async confirmUserAccount(token: string) {
    console.log('YE LO TOKEN', token);
    const result = await this.jwtService.verify(token, {
      secret: process.env.VERIFICATION_SECRET,
    });

    console.log('token==>', result);

    if (!result) {
      throw new ForbiddenException('Token Expired');
    }
    const userId = result.sub;
    const user = await this.userRepository.findOne({
      where: {
        userId: userId,
      },
    });
    if (!user) {
      throw new ForbiddenException('Access Denied !');
    }

    // Save the updated user object

    user.isVerified = true;
    await this.userRepository.save(user);
  }

  async logIn(loginDTO: LogInDTO) {
    const { identifier, password } = loginDTO;
    const user = await this.userRepository.findOne({
      where: [{ email: identifier }, { userName: identifier }],
    });

    if (!user) {
      throw new NotFoundException('No such user exists');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new ForbiddenException('Email or password incorrect');
    }

    if (!user.isVerified) {
      throw new ForbiddenException(
        'Please verify your account before logging in',
      );
    }

    const tokens = await this.getTokens(user.userId, user.email, user.role);
    await this.UpdateRtHash(user.userId, tokens.refresh_token);
    const parsedUser = await this.parseUser(user);
    return {
      tokens,
      parsedUser,
    };
  }

  async verifyNewCreatedUser(token: string) {
    console.log('YE LO TOKEN', token);
    try {
      const result = await this.jwtService.verify(token, {
        secret: process.env.VERIFICATION_SECRET,
      });

      console.log('token==>', result);

      if (!result) {
        throw new ForbiddenException('Token Expired');
      }
      const userId = result.sub;
      const user = await this.userRepository.findOne({
        where: {
          userId: userId,
        },
      });
      if (!user) {
        throw new ForbiddenException('Access Denied !');
      }

      // Save the updated user object

      user.isVerified = true;
      await this.userRepository.save(user);
    } catch (e) {
      throw new ForbiddenException(
        'Something went wrong during verification !',
      );
    }
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const rtMatches = await bcrypt.compare(refreshToken, user.hashedRt);
    if (!rtMatches) {
      throw new ForbiddenException('Access Denied !!');
    }

    const newTokens = await this.getTokens(user.userId, user.email, user.role);

    const parsedUser = await this.parseUser(user);
    return {
      newTokens,
      parsedUser,
    };
  }

  async Logout(userId: string) {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    if (user.hashedRt !== null) {
      return await this.userRepository.update(
        { hashedRt: user.hashedRt },
        { hashedRt: null },
      );
    }
  }
}
