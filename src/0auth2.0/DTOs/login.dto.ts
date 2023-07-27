import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogInDTO {
  @IsString({ message: 'Please provide email or username as a string' })
  @IsNotEmpty({ message: 'Please provide email or username' })
  @ApiProperty({ example: 'user@example.com' })
  identifier: string;

  @IsNotEmpty({ message: 'Please provide a valid Password' })
  @IsString({ message: 'Invalid Password. must be a valid string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @ApiProperty()
  password: string;
}
