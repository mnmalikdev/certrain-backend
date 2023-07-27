import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty({ message: 'Please provide a valid username' })
  @IsString({ message: 'Invalid username. Usernames must be valid string' })
  @ApiProperty({
    description: 'Display Name',
    example: 'John Doe',
  })
  userName: string;

  @IsNotEmpty({ message: 'Please provide a valid business name' })
  @IsString({
    message: 'Invalid business name. business name must be valid string',
  })
  @ApiProperty({
    description: 'business name of user',
    example: 'Lex_Corp',
  })
  businessName: string;

  @IsNotEmpty({ message: 'Please provide a valid email' })
  @IsString({ message: 'Please provide email as a string' })
  @IsEmail()
  @ApiProperty({ example: '_@_.com' })
  email: string;

  @IsNotEmpty({ message: 'Please provide a valid Password' })
  @IsString({ message: 'Invalid Password. must be valid string' })
  @MinLength(6, { message: 'Password must be 6 characters atleast' })
  @ApiProperty()
  password: string;
}
