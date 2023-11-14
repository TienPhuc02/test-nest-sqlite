import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
