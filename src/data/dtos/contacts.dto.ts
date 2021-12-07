import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Company } from '../schemas/company.schema';
import { ApiProperty } from '@nestjs/swagger';


export class CreateContactRequest {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  status: number;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  address: string;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  zip_code: number;

  @ApiProperty()
  account_status: number;

  @ApiProperty()
  company_id: string;

}

export class UpdateContactRequest {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  type: number;

  @ApiProperty()
  status: number;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  address: string;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  zip_code: number;

  @ApiProperty()
  account_status: number;

  @ApiProperty()
  company_id: string;

}
