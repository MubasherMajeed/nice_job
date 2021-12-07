import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCompanyRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postal_code: number;

  @ApiProperty()
  website: string;

  @ApiProperty({ type: String, format: 'binary' })
  logo: string;

  @ApiProperty()
  sdk_public_key: string;
}


export class UpdateCompanyRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postal_code: number;

  @ApiProperty()
  website: string;

  @ApiProperty({ type: String, format: 'binary' })
  logo: string;

  @ApiProperty()
  sdk_public_key: string;
}



