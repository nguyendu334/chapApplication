import { IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(16)
  username: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  lastName: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;
}
