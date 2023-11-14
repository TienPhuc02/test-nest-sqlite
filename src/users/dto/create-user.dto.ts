import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Please Enter Your First Name' })
  firstName: string;
  @IsNotEmpty({ message: 'Please Enter Your lastName' })
  lastName: string;
  @IsNotEmpty({ message: 'Please Enter Your password' })
  password: string;
  @IsNotEmpty({ message: 'Please Enter Your passwordConfirm' })
  passwordConfirm: string;
  @IsNotEmpty({ message: 'Please Enter Your emailAddress' })
  emailAddress: string;
  @IsNotEmpty({ message: 'Please Enter Your phoneNumber' })
  phoneNumber: string;
  @IsNotEmpty({ message: 'Please Enter Your gender' })
  gender: string;
}
