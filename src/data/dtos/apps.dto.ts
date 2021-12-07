import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAppRequest {

  @ApiProperty()
  name: string;
  @ApiProperty()
  data: string;
  @ApiProperty()
  connected: boolean;
  @ApiProperty()
  media_type: number;
}

export class UpdateAppRequest {

  @ApiProperty()
  name: string;
  @ApiProperty()
  data: string;
  @ApiProperty()
  connected: boolean;
  @ApiProperty()
  media_type: number;
}
