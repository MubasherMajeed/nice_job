import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Person } from '../schemas/person.schema';
import { Company } from '../schemas/company.schema';
import { ApiBody, ApiProperty } from '@nestjs/swagger';


export class CreateStoryRequest {
  @ApiProperty()
  comment: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  tags: string;
}

export class UpdateStoryRequest {
  @ApiProperty()
  comment: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  tags: string;
}
