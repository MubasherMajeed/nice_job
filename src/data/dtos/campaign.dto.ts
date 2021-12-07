import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCampaignRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  status: number;
  @ApiProperty()
  status_change_time: string;
  @ApiProperty()
  new_review: number;
  @ApiProperty()
  entered: number;
  @ApiProperty()
  people_enrolled: number;
  @ApiProperty()
  people_exited: number;

}

export class UpdateCampaignRequest {
  @ApiProperty()
  name: string;
  @ApiProperty()
  status: number;
  @ApiProperty()
  status_change_time: string;
  @ApiProperty()
  new_review: number;
  @ApiProperty()
  entered: number;
  @ApiProperty()
  people_enrolled: number;
  @ApiProperty()
  people_exited: number;

}
