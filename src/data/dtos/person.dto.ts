import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../common/auth/users/user.schema';


export class CreatePersonRequest extends User {

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;


  @ApiProperty()
  role: number;
}


export class UpdatePeopleRequest {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty()
  role: number;
}
