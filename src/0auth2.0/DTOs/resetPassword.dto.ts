import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDTO {
  @IsNotEmpty({ message: 'Please provide a valid Password' })
  @IsString({ message: 'Invalid Password. must be valid string' })
  @MinLength(6, { message: 'Password must be 6 characters atleast' })
  @ApiProperty()
  password: string;

  @IsNotEmpty({ message: 'Please provide token' })
  @IsString({ message: 'Invalid token . please provide as string' })
  @ApiProperty()
  token: string;
}
