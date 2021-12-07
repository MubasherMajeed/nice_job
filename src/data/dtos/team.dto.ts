import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Person } from '../schemas/person.schema';
import { Company } from '../schemas/company.schema';
import { ApiProperty } from '@nestjs/swagger';


export class CreateTeamRequest {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  role: number;
}


export class UpdateTeamRequest {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  role: number;
}

